const express = require("express");
const bodyParser = require('body-parser');
const multer = require('multer'); // for handling file uploads
const axios = require("axios");
const Replicate = require("replicate");

const app = express();


const replicate = new Replicate();

app.get('/run-model', async (req, res) => {
  console.log("Running the model...");
  const output = await replicate.run(
    "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
    {
      input: {
        prompt: "An astronaut riding a rainbow unicorn, cinematic, dramatic",
      }
    }
  );
  console.log(output);
  res.send(output);
});
  
  // Example route for testing (replace with your actual routes)
  app.get('/', (req, res) => {
    res.send('Server is running!');
  });
  
  app.listen(8800, () => {
    console.log("server is running on 8800")
  })