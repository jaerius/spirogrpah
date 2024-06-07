const axios = require('axios');
const FormData = require('form-data');
const Replicate = require('replicate');

const JWT2 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI3NWQxNDhiNS1kMzQ5LTRlZmUtYTcwYy04YjA2NmIwYWVlYjciLCJlbWFpbCI6InJ5bHlubjEwMjlAbmF2ZXIuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjFlNjIwM2Q0NjIzY2I3ZTBlODFkIiwic2NvcGVkS2V5U2VjcmV0IjoiZjczNDVlNDIxZjkzNjNkNjJiYzU3ZWQ5ZTBlY2Y5NzQ5YzEzMjRhM2Q1YjE1ZmQwY2U4MTk4ZDU5ZTBmM2NiMSIsImlhdCI6MTcxMTA4Mzg5M30.ofdRllbxJO2Qk0-co3FXaPpou6EBRqE9gImfu6iR06Q";
const REPLICATE_API_TOKEN = "r8_H7e3O10pcldK1gpzMPS9cqJw7uNOGFh0VjODF";

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
      const output = await runReplicateModel(url, prompt);

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

      const metadataResult = await pinJSONToIPFS(metadata);

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