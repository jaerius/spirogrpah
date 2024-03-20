import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import Replicate from 'replicate';
import cors from 'cors';

dotenv.config();

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.use(cors({
  origin: 'http://localhost:3000' // 클라이언트 애플리케이션의 도메인으로 대체하세요.
}));

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
        res.send({ message: 'Model run successfully', output });
        console.log('res.send실행완료')
    } catch (error) {
        console.error('모델 실행 중 서버 에러:', error);
        res.status(500).send('Error running model');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
