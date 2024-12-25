import { useState } from "react";
import { useShortenURL } from "../hooks/useShortenURL";

const ShortenURL = () => {
  const [url, setUrl] = useState("");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null); // Track which link is copied
  const [validationError, setValidationError] = useState("");
  const { shortenedLinks, error, loading, shortenURL } = useShortenURL();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if the input is empty
    if (!url.trim()) {
      setValidationError("Please add a link");
      return;
    }

    // Clear validation error and proceed
    setValidationError("");
    shortenURL(url); // Trigger URL shortening when the button is pressed
  };

  const handleCopy = (shortLink: string, index: number) => {
    navigator.clipboard.writeText(shortLink); // Copy the link to clipboard
    setCopiedIndex(index); // Set the copied index
    setTimeout(() => setCopiedIndex(null), 3000);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="lg:flex lg:flex-row lg:justify-between flex flex-col items-center bg-[url('/svgs/bg-shorten-desktop.svg')] bg-cover bg-no-repeat bg-darkviolet lg:px-12 px-5 lg:py-10 py-5 lg:mt-10 mt-24 rounded-lg"
      >
        <div className="w-full relative">
          <input
            type="text"
            placeholder="Shorten a link here..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className={`lg:w-[98.7%] w-full px-6 py-3.5 rounded-lg focus:outline-none placeholder:text-lg ${
              validationError
                ? "border-2 border-red placeholder:text-lg placeholder:text-red placeholder:opacity-50"
                : ""
            }`}
          />
          {validationError && (
            <p className="absolute top-16 text-sm text-red italic">
              {validationError}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={loading}
          className="lg:w-[11%] w-full bg-cyan hover:bg-cyanlight text-white lg:text-base text-lg lg:font-semibold font-medium lg:py-3.5 py-3 lg:mt-0 mt-4 rounded-lg"
        >
          {loading ? "Shortening..." : "Shorten it!"}
        </button>
      </form>

      {/* Display error message */}
      {error && <p>{error}</p>}

      {/* Display shortened URLs */}
      {shortenedLinks.length > 0 && (
        <div>
          <ul>
            {shortenedLinks.map((link, index) => (
              <li
                key={index}
                className="flex justify-between items-center my-3 px-7 py-3 border"
              >
                <p className="text-verydarkviolet">{link.original}</p>
                <div className="flex items-center space-x-4">
                  <a
                    href={link.short}
                    target="_blank"
                    rel="noopener referrer"
                    className="text-cyan"
                  >
                    {link.short}
                  </a>
                  <button
                    onClick={() => handleCopy(link.short, index)}
                    className={`px-7 py-1.5 rounded text-white transition-colors ${
                      copiedIndex === index
                        ? "bg-darkviolet"
                        : "bg-cyan hover:bg-opacity-50"
                    }`}
                  >
                    {copiedIndex === index ? "Copied!" : "Copy"}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ShortenURL;
