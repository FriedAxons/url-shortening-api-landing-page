import { useState } from "react";
import axios from "axios";

const API_URL = "https://url-shortening-api-landing-page-5s4h.onrender.com";
// Initialize shortenedLinks as an array of objects
export const useShortenURL = () => {
  const [shortenedLinks, setShortenedLinks] = useState<
    {
      original: string;
      short: string;
    }[]
  >([]); // Empty array as the initial state

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const shortenURL = async (url: string) => {
    setLoading(true);
    setError(null);

    // Step 1: Clean and validate the URL
    const cleanUrl = url.trim();

    // Step 2: Check for invalid characters
    if (cleanUrl.includes(" ")) {
      setError("URL contains spaces, which is not allowed.");
      setLoading(false);
      return;
    }

    // Step 3: URL encode the URL to handle special characters
    const encodedURL = encodeURIComponent(cleanUrl);

    try {
      // Step 4: Make the API request with the encoded URL
      const response = await axios.post(API_URL, { url: encodedURL });

      // Step 5: Update the state with the shortened link
      setShortenedLinks((prev) => [
        ...prev,
        { original: cleanUrl, short: response.data.result_url },
      ]);
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        // If the error is related to Axios (API request failure)
        const errorMessage =
          err?.response?.data?.error ||
          "Failed to shorten the URL. Please try again.";
        setError(errorMessage);
      } else {
        // Handle any other unexpected errors
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false); // Stop loading regardless of success or failure
    }
  };

  return { shortenedLinks, error, loading, shortenURL };
};
