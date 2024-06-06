import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import Replicate from "replicate";
import cors from "cors";
import multer from "multer";
import stream from "stream";
import { promisify } from "util";
import { fileURLToPath } from "url";
import fs from "fs";
import axios from "axios";
import FormData from "form-data";
import path from "path";

dotenv.config();
//병합 전

const REPLICATE_API_TOKEN = process.env.REPLICATE_API_TOKEN;
const JWT2 =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI3NWQxNDhiNS1kMzQ5LTRlZmUtYTcwYy04YjA2NmIwYWVlYjciLCJlbWFpbCI6InJ5bHlubjEwMjlAbmF2ZXIuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjFlNjIwM2Q0NjIzY2I3ZTBlODFkIiwic2NvcGVkS2V5U2VjcmV0IjoiZjczNDVlNDIxZjkzNjNkNjJiYzU3ZWQ5ZTBlY2Y5NzQ5YzEzMjRhM2Q1YjE1ZmQwY2U4MTk4ZDU5ZTBmM2NiMSIsImlhdCI6MTcxMTA4Mzg5M30.ofdRllbxJO2Qk0-co3FXaPpou6EBRqE9gImfu6iR06Q";

const PORT = process.env.PORT || 5002;
const pipeline = promisify(stream.pipeline);
const app = express();

const host = "127.0.0.1";
const upload = multer({ dest: "uploads/" });
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const urlStatus = {};

async function pinFileToIPFS(filePath) {
  const url = "https://api.pinata.cloud/pinning/pinFileToIPFS";
  let data = new FormData();
  data.append("file", fs.createReadStream(filePath));
  data.append("pinataOptions", '{"cidVersion": 1}');
  data.append(
    "pinataMetadata",
    '{"name": "MyFile", "keyvalues": {"company": "Pinata"}}'
  );

  const config = {
    headers: {
      "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
      Authorization: `Bearer ${JWT2}`,
    },
  };

  const response = await axios.post(url, data, config);
  return response.data;
}

const pinJSONToIPFS = async (json) => {
  const data = JSON.stringify({
    pinataOptions: { cidVersion: 1 },
    pinataMetadata: {
      name: "testing",
      keyvalues: { customKey: "customValue", customKey2: "customValue2" },
    },
    pinataContent: json,
  });

  const config = {
    method: "post",
    url: "https://api.pinata.cloud/pinning/pinJSONToIPFS",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${JWT2}`,
    },
    data: data,
  };

  const res = await axios(config);
  return res.data;
};

async function runReplicateModel(url, prompt) {
  try {
    console.log("runReplicateModel 함수 실행 시작");
    const replicate = new Replicate({
      auth: REPLICATE_API_TOKEN,
    });

    const model =
      "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b";
    const input = {
      width: 768,
      height: 768,
      image: url,
      prompt: prompt,
      refine: "expert_ensemble_refiner",
      scheduler: "K_EULER",
      lora_scale: 0.6,
      num_outputs: 1,
      guidance_scale: 7.5,
      apply_watermark: false,
      high_noise_frac: 0.8,
      negative_prompt: "",
      prompt_strength: 0.8,
      num_inference_steps: 25,
    };

    console.log("Replicate 모델 실행 전: ", input);

    const output = await replicate.run(model, { input });

    console.log("Replicate 모델 실행 완료:", output);
    return output;
  } catch (error) {
    console.error("Replicate 모델 실행 중 에러 발생:", error);
    throw error;
  }
}

app.post("/upload-to-ipfs", upload.single("image"), async (req, res) => {
  if (req.file) {
    try {
      const imagePath = path.join(__dirname, req.file.path);
      const result = await pinFileToIPFS(imagePath);
      const metadata = {
        name: "MyFile",
        description: "blahblah",
        image: `https://gateway.pinata.cloud/ipfs/${result.IpfsHash}`,
        attributes: [],
      };
      const metadataResult = await pinJSONToIPFS(metadata);
      console.log(metadataResult);

      res.json({
        ipfsUrl: `https://gateway.pinata.cloud/ipfs/${result.IpfsHash}`,
        metadataResult: `https://gateway.pinata.cloud/ipfs/${metadataResult.IpfsHash}`,
      });
    } catch (error) {
      console.error("Error uploading image to IPFS:", error);
      res.status(500).send("Error uploading image to IPFS");
    }
  } else {
    res.status(400).send("No image uploaded.");
  }
});

app.post("/save-url", async (req, res) => {
  console.log("/save-url 경로로 POST 요청 받음");
  const { url, status1, status2 } = req.body;
  console.log("Request Body:", req.body); // 추가된 로그
  if (!url || !status1 || !status2) {
    console.log("URL이 요청 본문에 없음");
    return res.status(400).send("URL is required");
  }
  console.log("받은 URL:", url, "상태1:", status1, "상태2:", status2);

  try {
    console.log("Replicate 모델 실행을 시도합니다.");
    const prompt = `beautiful shape like ${status1} and ${status2} -like spirograph`;
    const output = await runReplicateModel(url, prompt);
    console.log("Replicate 모델 실행 결과:", output);

    const response = await axios({
      url: output[0],
      method: "GET",
      responseType: "stream",
    });

    const formData = new FormData();
    formData.append("file", response.data, {
      filename: "image.jpg",
      contentType: "image/jpeg",
    });

    const pinataResponse = await axios.post(
      "https://api.pinata.cloud/pinning/pinFileToIPFS",
      formData,
      {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
          Authorization: `Bearer ${JWT2}`,
        },
      }
    );

    const finalIpfsUrl = `https://gateway.pinata.cloud/ipfs/${pinataResponse.data.IpfsHash}`;
    console.log(finalIpfsUrl);

    const metadata = {
      name: "MyFile",
      description: "blahblah",
      image: "ipfs://" + pinataResponse.data.IpfsHash,
      attributes: [],
    };

    const metadataResult = await pinJSONToIPFS(metadata);
    console.log(metadataResult, "json result");

    urlStatus[url] = { status: "completed", correctedUrl: finalIpfsUrl };

    res.json({
      finalIpfsUrl: finalIpfsUrl,
      ipfsUrl: `https://gateway.pinata.cloud/ipfs/${pinataResponse.data.IpfsHash}`,
      metadataResult: `https://gateway.pinata.cloud/ipfs/${metadataResult.IpfsHash}`,
    });

    console.log("res.send실행완료");
  } catch (error) {
    console.error("모델 실행 중 서버 에러:", error);
    res.status(500).send("Error running model");
  }
});

app.get("/check-status", (req, res) => {
  const { url } = req.query;
  if (!url) {
    return res.status(400).send("URL is required");
  }
  const statusInfo = urlStatus[url];
  if (!statusInfo) {
    return res.status(404).send("URL not found");
  }
  res.json(statusInfo);
});

app.listen(PORT, host, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
