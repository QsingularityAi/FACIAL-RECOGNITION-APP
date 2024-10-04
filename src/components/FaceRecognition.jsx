import React, { useState } from 'react';
import "../App.css"; // Updated import path

function FaceRecognition() {
  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState(null);

  const handleFilesChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
    setProgress(0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (files.length !== 2) {
      alert('Please upload exactly two images.');
      return;
    }

    const formData = new FormData();
    formData.append('file1', files[0]);
    formData.append('file2', files[1]);

    setProgress(10);
    try {
      const response = await fetch('https://faceapi.miniai.live/face_compare', {
        method: 'POST',
        body: formData,
      });
      setProgress(50);
      const data = await response.json();
      setProgress(100);
      setResult(`Is same person? ${data.compare_result}\nSimilarity: ${data.compare_similarity}`);
    } catch (error) {
      setResult('Error processing images: ' + error.message);
    }
  };

  return (
    <div className="feature-card">
      <div className="feature-icon">👤</div>
      <div className="feature-title">Face Recognition</div>
      
      <input 
        type="file" 
        accept="image/*" 
        multiple 
        onChange={handleFilesChange} 
        style={{display: 'none'}} 
        id="face-recognition-upload"
      />
      
      <label htmlFor="face-recognition-upload" className="upload-btn">
        Choose Files
      </label>
      
      <button onClick={handleSubmit} className="action-btn">
        Compare Faces
      </button>
      
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      
      {result && <div className="result">{result}</div>}
    </div>
  );
}

export default FaceRecognition;
