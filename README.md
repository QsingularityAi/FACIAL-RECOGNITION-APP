# InsightFace - Facial Recognition App

This project is a facial recognition application built with JavaScript, offering multiple face analysis features.

![InsightFace Application Interface](./src/Demo.png)

## Features

The application provides three main functionalities:

1. **Face Recognition**: Compare faces to determine if they belong to the same person.
2. **Liveness Detection**: Check if an image contains a live person or a static photo.
3. **Emotion Recognition**: Analyze the emotion expressed in a facial image.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (which comes with [npm](http://npmjs.com/))
- Git (for version control)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/QsingularityAi/FACIAL-RECOGNITION-APP.git
   ```

2. Navigate to the project directory:
   ```
   cd FACIAL-RECOGNITION-APP
   ```

3. Install dependencies:
   ```
   npm install
   ```

## Running the Application

1. Start the development server:
   ```
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000` (or the port specified in your console output).

## Using the Application

- **Face Recognition**: Click "Choose Files" to select two images for comparison. Then click "Compare Faces" to see the similarity score.
- **Liveness Detection**: Choose an image and click "Check Liveness" to determine if it's a live person or not.
- **Emotion Recognition**: Select an image and click "Analyze Emotion" to detect the emotional expression.

## Building for Production

To create a production build:

```
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

- `/src`: Contains the source code
- `/public`: Static assets
- `/images`: Contains images used in the README and potentially the application
- `index.html`: Entry HTML file
- `vite.config.js`: Vite configuration file
- `package.json`: Project dependencies and scripts

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the Apache-2.0 License - see the [LICENSE](LICENSE) file for details.