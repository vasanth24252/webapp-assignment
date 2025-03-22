const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;
const BACKEND_URL = process.env.BACKEND_URL || "http://backend-service:5000";

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(`${BACKEND_URL}/`);
    const message = response.data.message;
    res.send(`
      <html>
        <head>
          <title>Node.js Frontend</title>
          <style>
            body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
            h1 { color: blue; }
          </style>
        </head>
        <body>
          <h1>Welcome to Node.js Frontend</h1>
          <p>Backend says: <strong>${message}</strong></p>
        </body>
      </html>
    `);
  } catch (error) {
    res.send("<h1>Could not reach backend</h1>");
  }
});

app.listen(PORT, () => {
  console.log(`Frontend running on port ${PORT}`);
});