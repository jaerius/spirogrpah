const fs = require("fs");
const path = require("path");
const FormData = require("form-data");
const axios = require("axios");
const formidable = require("formidable");
const dotenv = require("dotenv");

dotenv.config();

const JWT = process.env.JWT;
const UPLOAD_DIR = "../../uploads"; // Temporary directory for uploads

const pinFileToIPFS = async (filePath) => {
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
      Authorization: `Bearer ${JWT}`,
    },
  };

  const response = await axios.post(url, data, config);
  return response.data;
};

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
      Authorization: `Bearer ${JWT}`,
    },
    data: data,
  };

  const res = await axios(config);
  return res.data;
};

exports.handler = async (event) => {
  if (event.httpMethod === "POST") {
    const form = new formidable.IncomingForm();

    // Ensure the uploads directory exists
    if (!fs.existsSync(UPLOAD_DIR)) {
      fs.mkdirSync(UPLOAD_DIR, { recursive: true });
    }

    form.uploadDir = UPLOAD_DIR;
    form.keepExtensions = true;

    const buffer = Buffer.from(event.body, "base64");

    return new Promise((resolve, reject) => {
      form.parse(buffer, async (err, fields, files) => {
        if (err) {
          console.error("Error parsing form:", err);
          return resolve({
            statusCode: 500,
            body: JSON.stringify({ error: "Error parsing form" }),
          });
        }

        const file = files.image;
        const imagePath = file.path;

        try {
          const result = await pinFileToIPFS(imagePath);
          const metadata = {
            name: "MyFile",
            description: "blahblah",
            image: `https://gateway.pinata.cloud/ipfs/${result.IpfsHash}`,
            attributes: [],
          };
          const metadataResult = await pinJSONToIPFS(metadata);

          console.log(metadataResult);

          resolve({
            statusCode: 200,
            body: JSON.stringify({
              ipfsUrl: `https://gateway.pinata.cloud/ipfs/${result.IpfsHash}`,
              metadataResult: `https://gateway.pinata.cloud/ipfs/${metadataResult.IpfsHash}`,
            }),
          });
        } catch (error) {
          console.error("Error uploading image to IPFS:", error);
          resolve({
            statusCode: 500,
            body: JSON.stringify({ error: "Error uploading image to IPFS" }),
          });
        }
      });
    });
  }

  return {
    statusCode: 405,
    body: JSON.stringify({ message: "Method Not Allowed" }),
  };
};
