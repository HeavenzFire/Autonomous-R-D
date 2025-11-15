
import React from 'react';
import { AtomIcon } from './icons';

interface HeaderProps {
  onReset: () => void;
  simulationStarted: boolean;
}

const Header: React.FC<HeaderProps> = ({ onReset, simulationStarted }) => {
  return (
    <header className="flex justify-between items-center py-4 border-b border-cyan-400/20">
      <div className="flex items-center gap-3">
        <AtomIcon className="w-8 h-8 text-cyan-400" />
        <h1 className="text-2xl md:text-3xl font-bold font-orbitron text-gray-100">
          Autonomous R&D
        </h1>
      </div>
      {simulationStarted && (
        <button
          onClick={onReset}
          className="px-4 py-2 bg-gray-700/50 hover:bg-cyan-600/50 border border-cyan-500/30 text-cyan-300 hover:text-white rounded-md transition-all duration-300 text-sm"
        >
          New Simulation
        </button>
      )}
    </header>
  );
};

export default Header;
