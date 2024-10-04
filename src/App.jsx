// src/App.jsx

import React from 'react';
import backgroundImage from './3d-technology-geometric-black-background.jpg';
import FaceRecognition from './components/FaceRecognition';
import LivenessDetection from './components/LivenessDetection';
import EmotionRecognition from './components/EmotionRecognition';
import './App.css';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="faceguard-container">
        <header className="app-header">
          <h1 className="app-title">InsightFace</h1>
        </header>
        <div className="features-container">
          <FaceRecognition />
          <LivenessDetection />
          <EmotionRecognition />
        </div>
      </div>
    </div>
  );
}

export default App;
