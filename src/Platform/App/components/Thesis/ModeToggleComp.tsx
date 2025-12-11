import React from 'react';

interface ModeToggleProps {
  mode: 'explore' | 'detailed';
  setMode: (mode: 'explore' | 'detailed') => void;
}

export const ModeToggle: React.FC<ModeToggleProps> = ({ mode, setMode }) => {
  return (
    <div className="absolute top-4 left-1/2 -translate-x-1/2 z-[10000] bg-white rounded-xl shadow-lg p-1 flex gap-1">
       <button
        onClick={() => setMode('detailed')}
        className={`
          px-6 py-2 rounded-md font-medium text-sm border-none cursor-pointer transition-all duration-200
          ${mode === 'detailed' 
            ? 'bg-brand text-white' 
            : 'bg-white text-gray-600 hover:bg-gray-50'
          }
        `}
      >
        <span className="flex items-center gap-2">
          <span>📊</span>
          <span>Detailed</span>
        </span>
      </button>
      <button
        onClick={() => setMode('explore')}
        className={`
          px-6 py-2 rounded-md font-medium text-sm border-none cursor-pointer transition-all duration-200
          ${mode === 'explore' 
            ? 'bg-brand text-white' 
            : 'bg-white text-gray-600 hover:bg-gray-50'
          }
        `}
      >
        <span className="flex items-center gap-2">
          <span>🤖</span>
          <span>FRED AI</span>
        </span>
      </button>
    </div>
  );
};