//import React from 'react';
//import React from 'react';
import { Wand2, Image, Undo } from 'lucide-react';

interface ActionButtonsProps {
  onGenerateGradient: () => void;
  onBackgroundImage: () => void;
  onUndo: () => void;
  canUndo: boolean;
}

export function ActionButtons({ 
  onGenerateGradient, 
  onBackgroundImage,
  onUndo,
  canUndo
}: ActionButtonsProps) {
  return (
    <div className="flex gap-4 mt-6 justify-center">
      {/* Generate Gradient Button */}
      <button
        onClick={onGenerateGradient}
        className="px-6 py-2 rounded-lg flex items-center gap-2 bg-[#2a2a2a] text-white hover:bg-[#3a3a3a] hover:scale-105 transition-all"
      >
        <Wand2 size={20} />
        Generate Gradient
      </button>

      {/* Background Image Button */}
      <button 
        onClick={onBackgroundImage}
        className="px-6 py-2 rounded-lg flex items-center gap-2 bg-[#2a2a2a] text-white hover:bg-[#3a3a3a] hover:scale-105 transition-all"
      >
        <Image size={20} />
        Background Image
      </button>

      {/* Undo Button */}
      <button 
        onClick={onUndo}
        disabled={!canUndo}
        className={`px-6 py-2 rounded-lg flex items-center gap-2 transition-all ${
          canUndo
            ? 'bg-[#2a2a2a] text-white hover:bg-[#3a3a3a] hover:scale-105'
            : 'bg-[#2a2a2a] text-white opacity-50 cursor-not-allowed'
        }`}
      >
        <Undo size={20} />
        Undo
      </button>
    </div>
  );
}