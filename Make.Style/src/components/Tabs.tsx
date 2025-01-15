//import React from 'react';
//import React from 'react';
interface TabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Tabs({ activeTab, onTabChange }: TabsProps) {
  const tabs = ['Text', 'Colors', 'Effects'];

  return (
    <div className="mb-6">
      {/* Divider Line Above the Tabs Section */}
      <div className=" mt-4 border-b-2 border-gray-500 mb-10" />

      {/* Tabs */}
      <div className="flex gap-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              activeTab === tab
                ? 'bg-[#2a2a2a] text-white'
                : 'bg-white text-black hover:bg-gray-200 hover:text-black'
            } hover:scale-105`}
            onClick={() => onTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}