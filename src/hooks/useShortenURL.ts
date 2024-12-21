import { useState } from "react";
import axios from "axios";

const API_URL = "https://cleanuri.com/api/v1/shorten";
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
    try {
      const response = await axios.post(API_URL, { url });
      setShortenedLinks((prev) => [
        ...prev,
        { original: url, short: response.data.result_url },
      ]);
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        const errorMessage = err?.response?.data?.error || "Failed to shorten the URL. Please try again."
        setError(errorMessage);
      } else {
        setError("An unexpected error occurred.")
      }
    } finally {
      setLoading(false);
    }
  };

  return { shortenedLinks, error, loading, shortenURL };
};
