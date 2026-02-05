import { useEffect, useState } from 'react';

interface TypewriterEffectProps {
  text: string;
}

export function TypewriterEffect({ text }: TypewriterEffectProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 dark:text-blue-400">
      {displayText}
      <span className="animate-pulse">|</span>
    </h2>
  );
}