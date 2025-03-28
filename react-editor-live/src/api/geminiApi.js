import axios from "axios";

export const fetchGeminiSuggestion = async (code) => {
  try {
    const response = await axios.post("https://api.gemini.com/generate", {
      prompt: code,
    });
    return response.data.suggestion || code;
  } catch (error) {
    console.error("Error fetching AI suggestion", error);
    return code;
  }
};
