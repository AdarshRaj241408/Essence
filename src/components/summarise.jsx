import React, { useState } from "react";
import summarizeText from "../utils/openAiAPI"; // Adjust the path to match your folder structure
import Button from "./Button"; // Adjust path if needed
import Section from "./Section"; // Adjust path if needed
import convertFileToText from "../utils/convertFileToText";

const SummarisingPage = () => {
  const [inputText, setInputText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null); // State to manage the uploaded file

  const MAX_LENGTH = 1024; // Adjust this based on the model's limit

  const summarizeInChunks = async (text) => {
    const chunkSize = MAX_LENGTH; // Adjust this size based on the model's limit
    const chunks = [];

    for (let i = 0; i < text.length; i += chunkSize) {
      chunks.push(text.substring(i, i + chunkSize));
    }

    const summaries = await Promise.all(
      chunks.map((chunk) => summarizeText(chunk))
    );
    return summaries.join("\n"); // Join summaries with a newline
  };

  const handleSubmit = async () => {
    setLoading(true);

    const result = await summarizeInChunks(inputText);
    if (result) {
      setSummary(result);
    }
    setInputText("");
    setFile(null); // Clear the file state after submission
    setLoading(false);
  };

  // Function to handle file upload and text extraction
  const handleFileUpload = async (e) => {
    const selectedFile = e.target.files[0];
    if (file) {
      console.error("Only one file can be uploaded at a time.");
      return; // Prevent uploading another file
    }

    if (selectedFile) {
      const text = await convertFileToText(selectedFile);
      if (text) {
        console.log("Extracted Text:", text); // Log the extracted text
        setInputText(text); // Set the extracted text to inputText
        setFile(selectedFile.name); // Store the file name
        setLoading(false); // Stop loading if conversion is successful
      } else {
        console.error("No text extracted from PDF");
      }
    } else {
      console.error("No file selected");
    }
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

        <div className="flex justify-center mt-4 gap-2">
          <input
            type="file"
            onChange={handleFileUpload}
            accept=".txt,.docx,.pdf" // Accept specific file types
            className="file-input"
            style={{ display: "none" }} // Hide the default file input
            id="file-upload" // Use an ID for the label
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer p-2 bg-purple-600 text-white rounded-md shadow-md transition duration-300 hover:bg-purple-700"
          >
            Choose File
          </label>
          {file && ( // Display the selected file name
            <span className="text-white">{file}</span>
          )}
          <Button
            onClick={handleSubmit}
            className="transition duration-300 rounded-md shadow-lg"
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
            className="mt-6 p-4 border border-gray-300 rounded-md lg:max-w-7xl md:max-w-3xl sm:max-w-fit mx-auto"
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
      <style>{`
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
