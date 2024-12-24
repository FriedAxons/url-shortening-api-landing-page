import { useState } from "react";
import { useShortenURL } from "../hooks/useShortenURL";

const ShortenURL = () => {
  const [url, setUrl] = useState("");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null); // Track which link is copied
  const { shortenedLinks, error, loading, shortenURL } = useShortenURL();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
        className="flex flex-row justify-between items-center bg-[url('/svgs/bg-shorten-desktop.svg')] bg-cover bg-no-repeat bg-darkviolet px-12 py-10 rounded-lg"
      >
        <input
          type="text"
          placeholder="Shorten a link here..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-[89.5%] px-6 py-3 rounded-lg focus:outline-none"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-cyan hover:bg-cyanlight text-white font-semibold px-8 py-3 rounded-lg"
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
