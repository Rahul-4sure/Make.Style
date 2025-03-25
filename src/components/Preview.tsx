//import React from 'react';
//import React from 'react';
import { TwitterTemplate } from './templates/TwitterTemplate';

interface PreviewProps {
  selectedSize: string;
  gradient: string;
  text: string;
  fontSize: number;
  fontWeight: number;
  letterSpacing: number;
  fontFamily: string;
  textAlign: 'left' | 'center' | 'right';
  textShadow: string;
  textTransform: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  textColor: string;
  blur: number;
  opacity: number;
  rotation: number;
  scale: number;
  skew: number;
  brightness: number;
  contrast: number;
  backgroundImage: string;
  gradientType: 'linear' | 'radial';
}

export function Preview({
  selectedSize,
  gradient,
  text,
  fontSize,
  fontWeight,
  letterSpacing,
  fontFamily,
  textAlign,
  textShadow,
  textTransform,
  textColor,
  blur,
  opacity,
  rotation,
  scale,
  skew,
  brightness,
  contrast,
  backgroundImage,
  gradientType,
}: PreviewProps) {
  const backgroundStyles = backgroundImage 
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }
    : {
        backgroundImage: gradientType === 'linear' 
          ? gradient 
          : `radial-gradient(circle at center, ${gradient.split(',')[1]}, ${gradient.split(',')[2].replace(')', '')})`,
      };

  const containerClass = selectedSize === 'Square' 
    ? 'aspect-square max-w-[500px]' 
    : selectedSize === 'Mobile' 
      ? 'aspect-[9/16] max-w-[300px]' 
      : 'aspect-video w-full';

  const isTwitterTemplate = text === 'the thing about artists is they make simple and boring ideas interesting';

  return (
    <div className={`relative mx-auto overflow-hidden rounded-3xl ${containerClass}`}>
      <div
        className="w-full h-full flex items-center justify-center p-8"
        style={{
          ...backgroundStyles,
          filter: `brightness(${brightness}%) contrast(${contrast}%)`,
        }}
      >
        {isTwitterTemplate ? (
          <TwitterTemplate
            text={text}
            fontSize={fontSize}
            fontFamily={fontFamily}
            textColor={textColor}
          />
        ) : (
          <p
            style={{
              fontSize: `${fontSize}px`,
              fontWeight: fontWeight,
              letterSpacing: `${letterSpacing}px`,
              fontFamily: fontFamily,
              textAlign: textAlign,
              textShadow: textShadow,
              textTransform: textTransform,
              color: textColor,
              filter: `blur(${blur}px)`,
              opacity: opacity / 100,
              transform: `
                rotate(${rotation}deg)
                scale(${scale / 100})
                skew(${skew}deg)
              `,
            }}
            className="break-words max-w-full"
          >
            {text}
          </p>
        )}
      </div>
    </div>
  );
}