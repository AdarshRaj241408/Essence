import React, { useState } from "react";
import summarizeText from "../utils/openAiAPI"; // Adjust the path to match your folder structure
import Button from "./Button"; // Adjust path if needed
import Section from "./Section"; // Adjust path if needed

const SummarisingPage = () => {
  const [inputText, setInputText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const result = await summarizeText(inputText);
    if (result) {
      setSummary(result);
    }
    setInputText("");
    setLoading(false); // Stop loading
  };

  return (
    <Section className="summarising-section" id="summarising">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Summarize Your Text</h1>

        <textarea
          rows={10} // Start with 10 rows
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="w-full p-4 border-2 border-gray-300 rounded-md transition-all duration-300 focus:outline-none focus:ring focus:ring-purple-200 resize-none scrollbar"
          placeholder="Paste or type your text here..."
          style={{
            background: "#1f2937", // Dark grey background
            color: "white", // White text color
          }}
        />

        <div className="flex justify-center mt-4">
          <Button
            onClick={handleSubmit}
            className=" transition duration-300 rounded-md shadow-lg"
            disabled={loading}
          >
            {loading ? (
              <div className="spinner"></div> // Show spinner when loading
            ) : (
              "Start Summarizing"
            )}
          </Button>
        </div>

        {summary && !loading && (
          <div
            className="mt-6 p-4 border border-gray-300 rounded-md lg:max-w-4xl md:max-w-3xl sm:max-w-full mx-auto"
            style={{
              background: "#1f2937",
              color: "white",
            }}
          >
            <h2 className="text-xl font-semibold">Summary:</h2>
            <p>{summary}</p>
          </div>
        )}
      </div>
      {/* Inline styles for the spinner */}
      <style jsx>{`
        .spinner {
          width: 24px;
          height: 24px;
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.6s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </Section>
  );
};

export default SummarisingPage;
