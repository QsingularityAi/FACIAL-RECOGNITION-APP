// src/components/Home.jsx

// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// function Home() {
//   const navigate = useNavigate();

//   return (
//     <div className="home">
//       <h1>Face Recognition, Liveness Detection, and Emotion Recognition App</h1>
//       <div id="functionality-selection">
//         <button onClick={() => navigate('/face-recognition')}>Face Recognition</button>
//         <button onClick={() => navigate('/liveness-detection')}>Liveness Detection</button>
//         <button onClick={() => navigate('/emotion-recognition')}>Emotion Recognition</button>
//       </div>
//     </div>
//   );
// }

// export default Home;

import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Face Recognition, Liveness Detection, and Emotion Recognition App</h1>
      <div className="features-container">
        <div className="feature-card">
          <div className="feature-icon">
            {/* Add an appropriate icon here */}
          </div>
          <h2 className="feature-title">FACE RECOGNITION</h2>
          <p className="feature-description">
            Compare faces in two images to determine if they belong to the same person. 
            Ideal for identity verification and access control systems.
          </p>
          <button className="feature-button" onClick={() => navigate('/face-recognition')}>TRY IT NOW</button>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            {/* Add an appropriate icon here */}
          </div>
          <h2 className="feature-title">LIVENESS DETECTION</h2>
          <p className="feature-description">
            Detect whether a face in an image is from a live person or a spoof attempt. 
            Essential for preventing fraud in biometric authentication systems.
          </p>
          <button className="feature-button" onClick={() => navigate('/liveness-detection')}>TRY IT NOW</button>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            {/* Add an appropriate icon here */}
          </div>
          <h2 className="feature-title">EMOTION RECOGNITION</h2>
          <p className="feature-description">
            Analyze facial expressions to determine the emotional state of a person in an image. 
            Useful for sentiment analysis and user experience studies.
          </p>
          <button className="feature-button" onClick={() => navigate('/emotion-recognition')}>TRY IT NOW</button>
        </div>
      </div>
    </div>
  );
}

export default Home;