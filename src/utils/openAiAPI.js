import axios from "axios";

// Hugging Face API URL and your token
const API_URL =
  "https://api-inference.huggingface.co/models/facebook/bart-large-cnn";
// const API_TOKEN = "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";
const API_TOKEN = import.meta.env.VITE_API_TOKEN; // Accessing the token

// Summarize text function
const summarizeText = async (inputText) => {
  try {
    const response = await axios.post(
      API_URL,
      { inputs: inputText }, // The text you want to summarize
      {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`, // Authorization header with your token
        },
      }
    );

    // Extract summary from the API response
    const summary = response.data[0].summary_text;
    console.log("Summary:", summary);
    return summary;
  } catch (error) {
    console.error("Error summarizing text:", error);
    return null;
  }
};

export default summarizeText;
