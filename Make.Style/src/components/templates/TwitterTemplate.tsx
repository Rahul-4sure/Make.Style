//import React from 'react';
import { Twitter } from 'lucide-react';

interface TwitterTemplateProps {
  text: string;
  fontSize: number;
  fontFamily: string;
  textColor: string;
}

export function TwitterTemplate({ text, fontSize, fontFamily, textColor }: TwitterTemplateProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 max-w-[598px] mx-auto">
      <div className="flex items-start gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-black-200 flex-shrink-0" />
        <div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-gray-900">rishi</span>
            <span className="text-gray-800">@thelifeofrishi</span>
          </div>
        </div>
        <Twitter className="ml-auto text-[#1DA1F2]" size={20} />
      </div>
      
      <p 
        style={{ 
          fontSize: `${fontSize}px`,
          fontFamily,
          color: textColor,
        }}
        className="mb-4"
      >
        {text}
      </p>
      
      <div className="text-gray-500 text-sm">
        07:29 PM · Sep 29, 2022
      </div>
      
      <div className="flex gap-6 mt-4 text-gray-500 text-sm border-t border-gray-100 pt-4">
        <div>4 retweets</div>
        <div>2 quotes</div>
        <div>17 likes</div>
        <div>8 replies</div>
      </div>
    </div>
  );
}