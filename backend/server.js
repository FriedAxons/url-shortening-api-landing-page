import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const port = 5000;

// CORS setup to allow your frontend to talk to this backend
const allowedOrigins = ["https://friedaxons.github.io"];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.error(`Blocked origin: ${origin}`);
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

app.use(express.json()); // To parse JSON request body

// Helper function to validate URLs
function isValidUrl(url) {
  try {
    const parsedUrl = new URL(url);
    return ["http:", "https:"].includes(parsedUrl.protocol);
  } catch {
    return false;
  }
}

// POST endpoint for shortening URLs
app.post("/shorten", async (req, res) => {
  const { url } = req.body;

  // Log the URL received from the client
  console.log("Received URL:", url);

  // Validate the URL on the backend
  if (!url || !isValidUrl(url)) {
    return res
      .status(400)
      .json({ error: "Invalid URL provided" });
  }

  try {
    // Send a POST request to CleanURI API
    const response = await axios.post("https://cleanuri.com/api/v1/shorten", {
      url,
    });

    // Log the response from CleanURI API
    console.log("CleanURI Response:", response.data);

    // Check if CleanURI returns a shortened URL
    if (response.data && response.data.result_url) {
      return res.json({ result_url: response.data.result_url });
    } else {
      // If CleanURI didn't return a shortened URL, return an error
      return res.status(500).json({
        error: "Failed to shorten the URL. CleanURI didn't return a valid result.",
      });
    }

  } catch (error) {
    console.error("Error in URL shortening process:", error);
    if (error.response) {
      // Error from CleanURI API
      return res.status(500).json({
        error: `Failed to shorten the URL: ${
          error.response.data.error || "Unknown error"
        }`,
      });
    } else {
      // General network error handling
      return res.status(500).json({
        error: "Failed to shorten the URL due to a network error.",
      });
    }
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
