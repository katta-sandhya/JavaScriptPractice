import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

const Editor = () => {
  const [content, setContent] = useState("");

  const handleSave = async () => {
    try {
      await axios.post("http://localhost:5000/api/letters/save", { content });
      alert("Letter saved to Google Drive!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <ReactQuill value={content} onChange={setContent} />
      <button onClick={handleSave}>Save to Google Drive</button>
    </div>
  );
};

export default Editor;
