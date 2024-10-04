import React, { useState } from 'react';
import "../App.css"; // Updated import path

function EmotionRecognition() {
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [result, setResult] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setImagePreview(selectedFile ? URL.createObjectURL(selectedFile) : '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert('Please upload one image.');
      return;
    }

    setResult('Processing...');
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('https://faceapi.miniai.live/face_emotion', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();

      setResult(`Emotional Result: ${data.emotion_result}`);
    } catch (error) {
      setResult('Error processing image: ' + error.message);
    }
  };

  return (
    <div className="feature-card">
      <div className="feature-icon">😊</div>
      <div className="feature-title">Emotion Recognition</div>
      
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleFileChange} 
        style={{ display: 'none' }} 
        id="emotion-recognition-upload"
      />
      
      <label htmlFor="emotion-recognition-upload" className="upload-btn">
        Choose Image
      </label>
      
      <button onClick={handleSubmit} className="action-btn">
        Analyze Emotion
      </button>
      
      {imagePreview && (
        <div className="image-preview">
          <img src={imagePreview} alt="Uploaded" />
        </div>
      )}
      
      {result && (
        <div className="result">
          <h3>Result:</h3>
          <pre>{result}</pre>
        </div>
      )}
    </div>
  );
}

export default EmotionRecognition;
