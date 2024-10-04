import React, { useState } from 'react';
import "../App.css"; // Updated import path

function LivenessDetection() {
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
      const response = await fetch('https://faceapi.miniai.live/face_liveness_check', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();

      if (data.face_state && data.face_state.length > 0) {
        const resultData = data.face_state[0];
        setResult(`FaceID: ${resultData.FaceID}\nAge: ${resultData.Age}\nGender: ${resultData.Gender}\nLiveness: ${resultData.LivenessCheck}`);
      } else {
        setResult('No face detected or error in processing.');
      }
    } catch (error) {
      setResult('Error processing image: ' + error.message);
    }
  };

  return (
    <div className="feature-card">
      <div className="feature-icon">🔍</div>
      <div className="feature-title">Liveness Detection</div>
      
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleFileChange} 
        style={{ display: 'none' }} 
        id="liveness-detection-upload"
      />
      
      <label htmlFor="liveness-detection-upload" className="upload-btn">
        Choose Image
      </label>
      
      <button onClick={handleSubmit} className="action-btn">
        Check Liveness
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

export default LivenessDetection;
