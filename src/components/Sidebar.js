// src/components/Sidebar.js
import React from 'react';

const Sidebar = () => (
  <div className="w-1/4 p-6 bg-white bg-opacity-20 rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold mb-4">About</h2>
    <p className="mb-4">This tool summarizes text using an abstractive summarization model.</p>
    <h2 className="text-2xl font-bold mb-4">Instructions</h2>
    <ul className="list-disc pl-5">
      <li>Paste or type your text in the input area.</li>
      <li>Click the 'Summarize' button to get the summary.</li>
    </ul>
  </div>
);

export default Sidebar;
