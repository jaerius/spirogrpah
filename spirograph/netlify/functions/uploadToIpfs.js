import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import multer from "multer";
import FormData from "form-data";
import axios from "axios";

const upload = multer({ dest: "/tmp/uploads" });

const pinFileToIPFS = async (filePath, JWT2) => {
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
};

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

export const handler = async (event) => {
  const JWT2 = process.env.JWT2;

  if (event.httpMethod === "POST") {
    try {
      const filePath = "/tmp/uploads/" + event.headers["x-file-name"];
      fs.writeFileSync(filePath, event.body, "base64");

      const result = await pinFileToIPFS(filePath, JWT2);
      const metadata = {
        name: "MyFile",
        description: "blahblah",
        image: `https://gateway.pinata.cloud/ipfs/${result.IpfsHash}`,
        attributes: [],
      };
      const metadataResult = await pinJSONToIPFS(metadata, JWT2);
      fs.unlinkSync(filePath);

      return {
        statusCode: 200,
        body: JSON.stringify({
          ipfsUrl: `https://gateway.pinata.cloud/ipfs/${result.IpfsHash}`,
          metadataResult: `https://gateway.pinata.cloud/ipfs/${metadataResult.IpfsHash}`,
        }),
      };
    } catch (error) {
      console.error("Error uploading image to IPFS:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Error uploading image to IPFS" }),
      };
    }
  }

  return {
    statusCode: 405,
    body: JSON.stringify({ message: "Method Not Allowed" }),
  };
};
