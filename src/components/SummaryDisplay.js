// src/components/SummaryDisplay.js
import React from 'react';

const SummaryDisplay = ({ summary }) => (
  <div className="mt-6 p-4 bg-white bg-opacity-20 rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold mb-4">Summary</h2>
    <p>{summary || 'Your summary will appear here...'}</p>
  </div>
);

export default SummaryDisplay;
