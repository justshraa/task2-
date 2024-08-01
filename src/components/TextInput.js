// src/components/TextInput.js
import React, { useState } from 'react';
import axios from 'axios';

const TextInput = ({ setSummary }) => {
  const [text, setText] = useState('');

  const handleSummarize = async () => {
    const API_URL = 'https://api-inference.huggingface.co/models/facebook/bart-large-cnn';
    const API_TOKEN = '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'; // Replace with your actual Hugging Face API token

    try {
      const response = await axios.post(
        API_URL,
        { inputs: text },
        {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
            'Content-Type': 'application/json',
          },
        }
      );
      setSummary(response.data[0].summary_text);
    } catch (error) {
      console.error('Error summarizing text:', error.response ? error.response.data : error.message);
      setSummary('An error occurred while summarizing the text.');
    }
  };

  return (
    <div className="mb-6">
      <textarea
        className="w-full p-4 text-black rounded-lg"
        rows="10"
        placeholder="Paste or type your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button
        className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg"
        onClick={handleSummarize}
      >
        Summarize
      </button>
    </div>
  );
};

export default TextInput;
