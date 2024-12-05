import React, { useState } from 'react';
import axios from 'axios';

function DocumentUpload() {
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
  const handleFileChange = (e) => setFile(e.target.files[0]);
  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('document', file);

    try {
      const response = await axios.post('http://localhost:3001/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setData(response.data);
    } catch (error) {
      console.error('Error uploading file', error);
    }
  };
  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Document</button>
      {data && (
        <div>
          <h3>Extracted Data</h3>
          <p>Name: {data.name}</p>
          <p>Document Number: {data.documentNumber}</p>
          <p>Expiration Date: {data.expirationDate}</p>
        </div>
      )}
    </div>
  );
}
export default DocumentUpload;
