"use client";

import React from "react";
import {
  SiPython,
  SiTensorflow,
  SiKeras,
  SiOpencv,
  SiGooglecolab,
  SiHuggingface,
} from "react-icons/si";
import { FaRobot } from "react-icons/fa"; // Gradio yerine alternatif


export default function EmotionRecognitionPage() {
      const technologies = [
    { name: "Python", icon: <SiPython size={20} color="#3776AB" /> },
    { name: "TensorFlow", icon: <SiTensorflow size={20} color="#FF6F00" /> },
    { name: "Keras", icon: <SiKeras size={20} color="#D00000" /> },
    { name: "OpenCV", icon: <SiOpencv size={20} color="#5C3EE8" /> },
    { name: "Google Colab", icon: <SiGooglecolab size={20} color="#F9AB00" /> },
    { name: "Gradio", icon: <FaRobot size={20} color="#00C3B1" /> },
    { name: "Hugging Face", icon: <SiHuggingface size={20} color="#FFCC00" /> },
  ];

  return (
    <main className="min-h-screen bg-[#1f2937] text-white py-10 px-4 md:px-12">

      <section className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-3xl font-bold mb-4">Facial Expression Recognition</h1>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="https://buzyy-emotion-recognition-app.hf.space"
            target="_blank"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded shadow transition"
          >
            Live Demo Hugging Face
          </a>

          <a
            href="https://github.com/FatmaBuseBorlu/KDEF"
            target="_blank"
            className="inline-block bg-gray-700 hover:bg-gray-600 text-white py-2 px-5 rounded shadow transition"
          >
            View on GitHub
          </a>
        </div>

        <p className="text-gray-300 mt-4">
          This project uses a CNN model trained on the KDEF dataset to classify facial expressions into seven basic emotions: Happy, Sad, Angry, Disgust, Surprise, Fear, and Neutral. It was developed on Google Colab and deployed via Hugging Face Spaces.
        </p>
      </section>

      <section className="max-w-4xl mx-auto mb-10">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">Technologies Used</h2>
       <div className="flex flex-wrap gap-4 text-sm mb-8">

          {technologies.map((tech, index) => (
            <div key={index} className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded">
              {tech.icon}
              <span>{tech.name}</span>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-semibold mb-2">Model Overview</h2>
        <ul className="list-disc ml-6 text-gray-300 space-y-1 mb-8">
          <li>KDEF – 70 subjects, 490 images, 7 classes</li>
          <li>Images converted to grayscale, class imbalance handled via <code>resample</code></li>
          <li>Architecture: 3x Conv2D + ReLU + MaxPooling + Dropout + Dense</li>
          <li>Best performing class: Happy (F1 Score &gt; 0.90)</li>
          <li>Common misclassifications: Fear ↔ Surprise, Sad ↔ Neutral</li>
        </ul>

        <h2 className="text-xl font-semibold mb-0">Confusion Matrix</h2>
          <img
            src="/confusion_matrix (2).png"
            alt="Confusion Matrix"
            className="w-full rounded shadow mt-0"
          />
       

        <section className="max-w-6xl mx-auto mt-12 px-4">
          <h2 className="text-xl font-semibold mb-4">Sample Predictions</h2>
          <p className="list-disc ml-6 text-gray-300 space-y-1 mb-8">
            Below are randomly selected test samples, showing the actual vs predicted emotions:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                img: "/sample_1_disgust_disgust.png",
                actual: "Disgust",
                predicted: "Disgust",
              },
              {
                img: "/sample_1_sad_fear.png",
                actual: "Sad",
                predicted: "Fear",
            
              },
              {
                img: "/sample_2_fear_fear.png",
                actual: "Fear",
                predicted: "Fear",
              },
              {
                img: "/sample_3_surprise_fear.png",
                actual: "Surprise",
                predicted: "Fear",
            
              },
              {
                img: "/sample_3_neutral_neutral.png",
                actual: "Neutral",
                predicted: "Neutral",

              },
            ].map((sample, idx) => (
              <div key={idx} className="bg-gray-800 rounded-xl shadow p-4 flex flex-col items-center">
                <img src={sample.img} alt={sample.actual} className="w-50 h-50 rounded shadow mb-4 object-cover" />
                <div className="text-sm text-gray-400 mb-1">
                  <strong>True:</strong> {sample.actual}
                </div>
                <div className="text-sm text-white">
                  <strong>Predicted:</strong>{" "}
                  <span className={sample.actual !== sample.predicted ? "text-yellow-400" : "text-green-400"}>
                    {sample.predicted}
                  </span>
                </div>
              </div>
            ))}
                {/* Ortalamak için boş div (5 eleman varsa 6.sütunu doldurur) */}
    <div className="invisible" />
          </div>

          <p className="text-gray-500 text-xs mt-6 text-center">
            *All examples were randomly selected and generated during model inference.*
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold mb-2">Reference</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Goeleven et al. (2008).{" "}
            <em>The Karolinska Directed Emotional Faces: A validation study</em>. <br />
            <span className="text-gray-500">
              Cognition & Emotion, 22(6), 1094–1118.
            </span>
            <br />
            <a
              href="https://doi.org/10.1080/02699930701626582"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              🔗 DOI: 10.1080/02699930701626582
            </a>
          </p>
        </section>
      </section>
    </main>
  );
}