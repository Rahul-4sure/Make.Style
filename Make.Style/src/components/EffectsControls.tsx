import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Smartphone, Monitor, Laptop, Box, BoxSelect, Layers, Sparkles } from 'lucide-react';

interface EffectsControlsProps {
  blur: number;
  opacity: number;
  rotation: number;
  scale: number;
  skew: number;
  brightness: number;
  contrast: number;
  onBlurChange: (value: number) => void;
  onOpacityChange: (value: number) => void;
  onRotationChange: (value: number) => void;
  onScaleChange: (value: number) => void;
  onSkewChange: (value: number) => void;
  onBrightnessChange: (value: number) => void;
  onContrastChange: (value: number) => void;
}

export function EffectsControls({
  blur,
  opacity,
  rotation,
  scale,
  skew,
  brightness,
  contrast,
  onBlurChange,
  onOpacityChange,
  onRotationChange,
  onScaleChange,
  onSkewChange,
  onBrightnessChange,
  onContrastChange,
}: EffectsControlsProps) {
  const { theme } = useTheme();
  const [activeEffect, setActiveEffect] = useState<string | null>(null);
  
  const mockups = [
    { name: 'Phone', icon: Smartphone },
    { name: 'Desktop', icon: Monitor },
    { name: 'Laptop', icon: Laptop },
  ];

  const effects = [
    { name: 'Isometric', icon: Box },
    { name: 'Perspective', icon: BoxSelect },
    { name: 'Tilt', icon: Layers },
    { name: 'Float', icon: Sparkles },
  ];

  return (
    <div className="space-y-6">
      <div>
        <label className="text-sm text-gray-400 mb-4 block">Device Mockups</label>
        <div className="grid grid-cols-3 gap-2">
          {mockups.map(({ name, icon: Icon }) => (
            <button
              key={name}
              onClick={() => setActiveEffect(name)}
              className={`p-4 rounded-lg flex flex-col items-center gap-2 transition-all ${
                activeEffect === name
                  ? 'bg-blue-500 text-white'
                  : theme === 'dark'
                  ? 'bg-[#2a2a2a] hover:bg-[#3a3a3a]'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              <Icon size={24} />
              <span className="text-sm">{name}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-sm text-gray-400 mb-2 block">3D Effects</label>
        <div className="grid grid-cols-2 gap-2 mb-4">
          {effects.map(({ name, icon: Icon }) => (
            <button
              key={name}
              onClick={() => setActiveEffect(name)}
              className={`p-4 rounded-lg flex items-center justify-center gap-2 transition-all ${
                activeEffect === name
                  ? 'bg-blue-500 text-white'
                  : theme === 'dark'
                  ? 'bg-[#2a2a2a] hover:bg-[#3a3a3a]'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              <Icon size={20} />
              {name}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <label className="text-sm text-gray-400">Transform Controls</label>
        
        <div>
          <label className="text-xs text-gray-400 mb-1 block">Blur ({blur}px)</label>
          <input
            type="range"
            min="0"
            max="20"
            value={blur}
            onChange={(e) => onBlurChange(Number(e.target.value))}
            className="w-full accent-blue-500"
          />
        </div>

        <div>
          <label className="text-xs text-gray-400 mb-1 block">Opacity ({opacity}%)</label>
          <input
            type="range"
            min="0"
            max="100"
            value={opacity}
            onChange={(e) => onOpacityChange(Number(e.target.value))}
            className="w-full accent-blue-500"
          />
        </div>

        <div>
          <label className="text-xs text-gray-400 mb-1 block">Scale ({scale}%)</label>
          <input
            type="range"
            min="50"
            max="200"
            value={scale}
            onChange={(e) => onScaleChange(Number(e.target.value))}
            className="w-full accent-blue-500"
          />
        </div>

        <div>
          <label className="text-xs text-gray-400 mb-1 block">Skew ({skew}°)</label>
          <input
            type="range"
            min="-45"
            max="45"
            value={skew}
            onChange={(e) => onSkewChange(Number(e.target.value))}
            className="w-full accent-blue-500"
          />
        </div>

        <div>
          <label className="text-xs text-gray-400 mb-1 block">Rotation ({rotation}°)</label>
          <input
            type="range"
            min="0"
            max="360"
            value={rotation}
            onChange={(e) => onRotationChange(Number(e.target.value))}
            className="w-full accent-blue-500"
          />
        </div>
      </div>

      <div className="space-y-4">
        <label className="text-sm text-gray-400">Image Adjustments</label>
        
        <div>
          <label className="text-xs text-gray-400 mb-1 block">Brightness ({brightness}%)</label>
          <input
            type="range"
            min="0"
            max="200"
            value={brightness}
            onChange={(e) => onBrightnessChange(Number(e.target.value))}
            className="w-full accent-blue-500"
          />
        </div>

        <div>
          <label className="text-xs text-gray-400 mb-1 block">Contrast ({contrast}%)</label>
          <input
            type="range"
            min="0"
            max="200"
            value={contrast}
            onChange={(e) => onContrastChange(Number(e.target.value))}
            className="w-full accent-blue-500"
          />
        </div>
      </div>
    </div>
  );
}