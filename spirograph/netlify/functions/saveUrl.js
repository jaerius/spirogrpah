import axios from "axios";
import FormData from "form-data";
import Replicate from "replicate";

const pinJSONToIPFS = async (json, JWT2) => {
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

async function runReplicateModel(url, prompt, REPLICATE_API_TOKEN) {
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

  const output = await replicate.run(model, { input });
  return output;
}

export const handler = async (event) => {
  const REPLICATE_API_TOKEN = process.env.REPLICATE_API_TOKEN;
  const JWT2 = process.env.JWT2;

  if (event.httpMethod === "POST") {
    const { url, status1, status2 } = JSON.parse(event.body);

    if (!url || !status1 || !status2) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "URL, status1, and status2 are required" }),
      };
    }

    try {
      const prompt = `beautiful shape like ${status1} and ${status2} -like spirograph`;
      const output = await runReplicateModel(url, prompt, REPLICATE_API_TOKEN);

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

      const metadata = {
        name: "MyFile",
        description: "blahblah",
        image: "ipfs://" + pinataResponse.data.IpfsHash,
        attributes: [],
      };

      const metadataResult = await pinJSONToIPFS(metadata, JWT2);

      return {
        statusCode: 200,
        body: JSON.stringify({
          finalIpfsUrl: finalIpfsUrl,
          ipfsUrl: `https://gateway.pinata.cloud/ipfs/${pinataResponse.data.IpfsHash}`,
          metadataResult: `https://gateway.pinata.cloud/ipfs/${metadataResult.IpfsHash}`,
        }),
      };
    } catch (error) {
      console.error("Error running model:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Error running model" }),
      };
    }
  }

  return {
    statusCode: 405,
    body: JSON.stringify({ message: "Method Not Allowed" }),
  };
};
