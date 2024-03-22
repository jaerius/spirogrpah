import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import Replicate from 'replicate';
import cors from 'cors';
import multer from 'multer';
import stream from 'stream';
import { promisify } from 'util';
import { fileURLToPath } from 'url';
import fs from 'fs';
import axios from 'axios';
import FormData from 'form-data';
import path from 'path';

//const JWT2 = process.env.JWT;
const REPLICATE_API_TOKEN = process.env.REPLICATE_API_TOKEN;

const JWT2='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI3NWQxNDhiNS1kMzQ5LTRlZmUtYTcwYy04YjA2NmIwYWVlYjciLCJlbWFpbCI6InJ5bHlubjEwMjlAbmF2ZXIuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjFlNjIwM2Q0NjIzY2I3ZTBlODFkIiwic2NvcGVkS2V5U2VjcmV0IjoiZjczNDVlNDIxZjkzNjNkNjJiYzU3ZWQ5ZTBlY2Y5NzQ5YzEzMjRhM2Q1YjE1ZmQwY2U4MTk4ZDU5ZTBmM2NiMSIsImlhdCI6MTcxMTA4Mzg5M30.ofdRllbxJO2Qk0-co3FXaPpou6EBRqE9gImfu6iR06Q'

const pipeline = promisify(stream.pipeline); // Fix for the promisify usage


dotenv.config();

const app = express();
const port = 5000;
const upload = multer({ dest: 'uploads/' });
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.json());

app.use(cors({
  origin: 'http://localhost:3000' // 클라이언트 애플리케이션의 도메인으로 대체하세요.
}));

/*
async function downloadImage(url, outputPath) {
  const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream',
  });
  await pipeline(response.data, fs.createWriteStream(outputPath));
} */

async function pinFileToIPFS(filePath) {
  const url = 'https://api.pinata.cloud/pinning/pinFileToIPFS';

  let data = new FormData();
  console.log(filePath)
  data.append('file', fs.createReadStream(filePath));
  data.append("pinataOptions", '{"cidVersion": 1}');
  data.append("pinataMetadata", '{"name": "MyFile", "keyvalues": {"company": "Pinata"}}');

  const config = {
      headers: {
          'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
          'Authorization': `Bearer ${JWT2}`
      }
  };

  console.log(config)

  const response = await axios.post(url, data, config);
  return response.data;
}

// Replicate API를 사용하는 함수
async function runReplicateModel(url) {
    console.log('runReplicateModel 함수 실행 시작');
    const replicate = new Replicate({
        auth: process.env.REPLICATE_API_TOKEN
    });

    const model = 'stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b';
    const input = {
        width: 768,
        height: 768,
        image: url,
        prompt: 'beautiful space-like spirograph',
        refine: 'expert_ensemble_refiner',
        scheduler: 'K_EULER',
        lora_scale: 0.6,
        num_outputs: 1,
        guidance_scale: 7.5,
        apply_watermark: false,
        high_noise_frac: 0.8,
        negative_prompt: '',
        prompt_strength: 0.8,
        num_inference_steps: 25,
    };

    try {
        console.log('Replicate 모델 실행 전');
        const output = await replicate.run(model, { input });
        console.log('Replicate 모델 실행 완료:', output);
        return output;
    } catch (error) {
        console.error('Replicate 모델 실행 중 에러 발생:', error);
        throw error;
    }
}

app.post('/upload-to-ipfs', upload.single('image'), async (req, res) => {
  // Multer가 이미지를 'uploads/' 폴더에 저장
  if (req.file) {
      try {
          const imagePath = path.join(__dirname, req.file.path);
          const result = await pinFileToIPFS(imagePath); // IPFS 업로드 함수
          res.json({ ipfsUrl: `https://gateway.pinata.cloud/ipfs/${result.IpfsHash}` });
      } catch (error) {
          console.error('Error uploading image to IPFS:', error);
          res.status(500).send('Error uploading image to IPFS');
      }
  } else {
      res.status(400).send('No image uploaded.');
  }
});

// '/save-url' 경로에 대한 POST 요청을 처리합니다.
app.post('/save-url', async (req, res) => {
    console.log('/save-url 경로로 POST 요청 받음');
    const { url } = req.body;
    if (!url) {
        console.log('URL이 요청 본문에 없음');
        return res.status(400).send('URL is required');
    }
    console.log('받은 URL:', url);

    try {
        console.log('Replicate 모델 실행을 시도합니다.');
        const output = await runReplicateModel(url);
        console.log('클라이언트로 응답을 보냅니다.');

        /*
        // Replicate에서 반환된 이미지 URL에서 이미지 다운로드
        const imagePath = path.join(__dirname, 'downloads', 'downloaded1.jpg'); // 저장할 경로와 파일명
        await downloadImage(output, imagePath);

        // 다운로드된 이미지를 IPFS에 업로드
        const finalIpfsResult = await pinFileToIPFS(imagePath);
        const finalIpfsUrl = `https://gateway.pinata.cloud/ipfs/${finalIpfsResult.IpfsHash}`;

      */

        const response = await axios({
          url: output/*.results[0].urls[0]*/, // Replicate로부터 반환된 이미지 URL
          method: 'GET',
          responseType: 'stream',
      });

        // 스트림을 Pinata에 직접 업로드하기
        const formData = new FormData();
        formData.append('file', response.data, {
            filename: 'image.jpg', // 파일 이름 지정
            contentType: 'image/jpeg' // MIME 타입 지정
        });
        
        const pinataResponse = await axios.post('https://api.pinata.cloud/pinning/pinFileToIPFS', formData, {
            headers: {
                'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
                'Authorization': `Bearer ${JWT2}`
            }
        });

        // 최종 IPFS URL 반환
        const finalIpfsUrl = `https://gateway.pinata.cloud/ipfs/${pinataResponse.data.IpfsHash}`;
        console.log(finalIpfsUrl)
    //    res.send({ message: 'Model run successfully', output });
        console.log('res.send실행완료');
        res.json({url: finalIpfsUrl})
       // res.send(finalIpfsUrl);

    } catch (error) {
        console.error('모델 실행 중 서버 에러:', error);
        res.status(500).send('Error running model');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
