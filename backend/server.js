import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000; // Port for the Express server

const allowedOrigins = [
  "http://localhost:3000", // Local development
  "https://friedaxons.github.io/url-shortening-api-landing-page/", // Production
];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST"],
};
// Enable CORS for all routes
app.use(cors(corsOptions));
app.use(express.json()); // To parse JSON request body

// POST endpoint for shortening URLs
app.post("/shorten", async (req, res) => {
  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  try {
    // Forward the request to CleanURI API or any other URL shortening service
    const response = await axios.post("https://cleanuri.com/api/v1/shorten", {
      url,
    });

    // Send back the shortened URL in the response
    res.json({ error: "Failed to shorten the URL" });
  } catch (error) {
    console.error("Error shortening URL:", error);
    res.status(500).json({ error: "Failed to shorten the URL" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
