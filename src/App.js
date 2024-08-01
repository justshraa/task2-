
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TextInput from './components/TextInput';
import SummaryDisplay from './components/SummaryDisplay';

function App() {
  const [summary, setSummary] = useState('');

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
      <Sidebar />
      <div className="flex flex-col flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Text Summarizer</h1>
        <TextInput setSummary={setSummary} />
        <SummaryDisplay summary={summary} />
      </div>
    </div>
  );
}

export default App;
