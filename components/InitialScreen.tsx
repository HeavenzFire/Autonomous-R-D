
import React, { useState } from 'react';

interface InitialScreenProps {
  onStart: (topic: string) => void;
}

const InitialScreen: React.FC<InitialScreenProps> = ({ onStart }) => {
  const [topic, setTopic] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (topic.trim()) {
      onStart(topic);
    }
  };

  const presetTopics = [
    "Quantum Computing",
    "Artificial General Intelligence",
    "Longevity and Anti-Aging",
    "Fusion Energy",
    "Interstellar Travel"
  ];

  return (
    <div className="mt-16 flex flex-col items-center text-center">
      <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-cyan-400">Welcome, Futurist.</h2>
      <p className="mt-4 max-w-2xl text-lg text-gray-300">
        Define a field of research and witness decades of progress unfold in minutes. The AI will simulate breakthroughs, discoveries, and the evolution of technology based on your prompt.
      </p>

      <form onSubmit={handleSubmit} className="w-full max-w-xl mt-10">
        <label htmlFor="research-topic" className="sr-only">Enter Research Topic</label>
        <input
          id="research-topic"
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="e.g., 'Neural Interfaces'"
          className="w-full px-5 py-4 bg-gray-800/50 border-2 border-cyan-400/30 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 rounded-lg text-lg text-white placeholder-gray-500 outline-none transition-all duration-300"
        />
        <button
          type="submit"
          disabled={!topic.trim()}
          className="mt-6 w-full px-8 py-4 bg-cyan-500 hover:bg-cyan-400 disabled:bg-gray-600 disabled:cursor-not-allowed text-gray-900 font-bold font-orbitron text-xl rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          Begin Simulation
        </button>
      </form>
      
      <div className="mt-8">
        <p className="text-gray-400">Or select a preset topic:</p>
        <div className="flex flex-wrap justify-center gap-2 mt-3">
          {presetTopics.map(preset => (
            <button
              key={preset}
              onClick={() => onStart(preset)}
              className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-cyan-300 text-sm rounded-full transition-colors"
            >
              {preset}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InitialScreen;
