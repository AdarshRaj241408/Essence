import pdfToText from "react-pdftotext";

const convertFileToText = async (file) => {
  if (!file || file.type !== "application/pdf") {
    throw new Error("Please upload a valid PDF file.");
  }

  try {
    const text = await pdfToText(file);
    return text; // Return the extracted text
  } catch (error) {
    console.error("Failed to extract text from PDF", error);
    throw error; // Rethrow the error for further handling
  }
};

export default convertFileToText;
