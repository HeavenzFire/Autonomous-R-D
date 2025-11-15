
import React from 'react';

interface ControlPanelProps {
  onTimeJump: (years: number) => void;
  isSimulating: boolean;
}

const timeJumps = [1, 5, 10, 50];

const ControlPanel: React.FC<ControlPanelProps> = ({ onTimeJump, isSimulating }) => {
  return (
    <div className="p-4 bg-gray-800/50 rounded-lg border border-cyan-400/20 sticky top-4 z-10 backdrop-blur-sm">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <p className="font-orbitron text-lg text-cyan-300 mr-4">Advance Time:</p>
        {timeJumps.map((years) => (
          <button
            key={years}
            onClick={() => onTimeJump(years)}
            disabled={isSimulating}
            className="w-full sm:w-auto px-6 py-2 bg-gray-700 hover:bg-cyan-600/80 disabled:bg-gray-600/50 disabled:cursor-wait text-white font-semibold rounded-md transition-all duration-200 border border-transparent hover:border-cyan-400"
          >
            + {years} {years === 1 ? 'Year' : 'Years'}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ControlPanel;
