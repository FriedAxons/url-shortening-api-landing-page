import { useState } from "react";
import axios from "axios";

const API_URL =
  "https://url-shortening-api-landing-page-5s4h.onrender.com/shorten";

export const useShortenURL = () => {
  const [shortenedLinks, setShortenedLinks] = useState<
    { original: string; short: string }[]
  >([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const shortenURL = async (url: string) => {
    setLoading(true);
    setError(null);

    const cleanUrl = url.trim();

    // Step 1: Check if URL contains invalid characters (spaces)
    if (cleanUrl.includes(" ")) {
      setError("URL contains spaces, which is not allowed.");
      setLoading(false);
      return;
    }

    // Step 2: Validate URL format on the frontend
    /*
      The purpose of frontend validation is to provide immediate feedback to the user. This helps to quickly notify users if they've entered an invalid URL format before making an API call. It improves user experience because they won't have to wait for the server to respond before knowing their URL is invalid.

      Frontend Validation is for user experience. It quickly catches basic mistakes and prevents unnecessary API calls.
    */
    if (!cleanUrl || !isValidUrl(cleanUrl)) {
      setError("Please enter a valid URL.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(API_URL, { url: cleanUrl });
      console.log(response.data);

      setShortenedLinks((prev) => [
        ...prev,
        { original: cleanUrl, short: response.data.result_url },
      ]);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const status = err.response?.status;
        if (status === 400) {
          setError("Invalid URL. Please try again.");
        } else {
          setError("Server error. Please try later.");
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return { shortenedLinks, error, loading, shortenURL };
};

// Frontend helper function to validate URLs
function isValidUrl(url: string) {
  try {
    const parsedUrl = new URL(url);
    return ["http:", "https:"].includes(parsedUrl.protocol);
  } catch {
    return false;
  }
}