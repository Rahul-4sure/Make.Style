//import React from 'react';
//import React from 'react';
import { Download } from 'lucide-react';

interface SizeControlsProps {
  selectedSize: string;
  onSizeChange: (size: string) => void;
  onDownload: () => void;
}

export function SizeControls({ selectedSize, onSizeChange, onDownload }: SizeControlsProps) {
  const sizes = ['Desktop', 'Mobile', 'Square'];

  return (
    <div className="mt-auto">
      {/* Size Buttons */}
      <div className="flex gap-2 mb-4">
        {sizes.map((size) => (
          <button
            key={size}
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              selectedSize === size
                ? 'bg-[#2f2f2f] text-white'
                : 'bg-white text-black hover:bg-gray-200 hover:text-black'
            } hover:scale-105`}
            onClick={() => onSizeChange(size)}
          >
            {size}
          </button>
        ))}
      </div>

      {/* Download Button */}
      <button
        onClick={onDownload}
        className="w-full bg-white text-black rounded-lg py-2 flex items-center justify-center gap-2 transition-all duration-300 hover:bg-black hover:text-white hover:scale-105"
      >
        <Download size={20} />
        Download
      </button>
    </div>
  );
}