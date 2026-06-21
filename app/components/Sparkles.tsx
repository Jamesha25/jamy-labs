'use client';

import { useEffect, useState } from 'react';

interface Sparkle {
  id: number;
  color: string;
  size: number;
  style: React.CSSProperties;
}

export const Sparkles = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    // Generate static sparkles for background
    const newSparkles = Array.from({ length: 50 }).map((_, i) => {
      const size = Math.random() * 4 + 1; // 1px to 5px
      // Colors: gold, white, light blue, soft pink
      const colors = ['#FFD700', '#FFFFFF', '#87CEFA', '#FFB6C1'];
      return {
        id: i,
        color: colors[Math.floor(Math.random() * colors.length)],
        size,
        style: {
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 3 + 2}s`, // 2s to 5s
          animationDelay: `${Math.random() * 5}s`,
        }
      };
    });
    setSparkles(newSparkles);
  }, []);

  if (sparkles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {sparkles.map((sparkle) => (
        <span
          key={sparkle.id}
          className="absolute rounded-full animate-sparkle opacity-0 mix-blend-screen"
          style={{
            ...sparkle.style,
            width: sparkle.size,
            height: sparkle.size,
            backgroundColor: sparkle.color,
            boxShadow: `0 0 ${sparkle.size * 2}px ${sparkle.color}`,
          }}
        />
      ))}
    </div>
  );
};
