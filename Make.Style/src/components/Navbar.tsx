import { useState } from 'react';
import { Home, ChevronDown, RotateCcw } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onReset: () => void;
  onTemplateSelect: (template: string) => void;
  onHomeClick: () => void;
}

export function Navbar({ onReset, onTemplateSelect, onHomeClick }: NavbarProps) {
  const { theme } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const templates = [
    'Twitter Screenshot',
    'Code Screenshot',
    'Social Media Post',
    'Banner Design',
  ];

  const buttonBaseClass = `px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${
    theme === 'dark'
      ? 'bg-[#2a2a2a] text-white hover:bg-[#3a3a3a] hover:scale-105'
      : 'bg-gray-100 text-gray-900 hover:bg-gray-400 hover:scale-105'
  }`;

  return (
    <nav className="sticky top-0 z-50 flex justify-center items-center gap-6 mb-0 py-3 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90 bg-white dark:bg-[#0c0c0c]">
      {/* Home Button */}
      <button onClick={onHomeClick} className={buttonBaseClass}>
        <Home size={20} />
        Home
      </button>

      {/* Templates Dropdown */}
      <div className="relative">
        <button
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
          className={buttonBaseClass}
        >
          Templates
          <ChevronDown
            size={20}
            className={`transform transition-transform duration-200 ${
              isDropdownOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        {isDropdownOpen && (
          <div
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
            className={`absolute top-full mt-2 w-48 rounded-lg shadow-lg ${
              theme === 'dark' ? 'bg-[#1a1a1a] text-white' : 'bg-white text-gray-900'
            }`}
          >
            {templates.map((template) => (
              <button
                key={template}
                onClick={() => {
                  onTemplateSelect(template);
                  setIsDropdownOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 first:rounded-t-lg last:rounded-b-lg transition-all duration-300 ${
                  theme === 'dark'
                    ? 'hover:bg-[#413f3f]'
                    : 'hover:bg-gray-100'
                }`}
              >
                {template}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Reset Button */}
      <button onClick={onReset} className={buttonBaseClass}>
        <RotateCcw size={20} />
        Reset
      </button>
    </nav>
  );
}