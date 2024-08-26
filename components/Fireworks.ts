// components/Fireworks.tsx
import React, { useEffect, useState } from 'react';
import styles from '../styles/Fireworks.module.css';

interface FireworkProps {
  color: string;
  top: string;
  left: string;
  duration: number;
}

const Firework: React.FC<FireworkProps> = ({ color, top, left, duration }) => {
  return (
    <div 
      className={styles.firework} 
      style={{ 
        '--top': top, 
        '--left': left, 
        '--color': color,
        '--duration': `${duration}s`
      } as React.CSSProperties}
    />
  );
};

interface FireworksProps {
  duration?: number;
  count?: number;
}

const Fireworks: React.FC<FireworksProps> = ({ duration = 5, count = 10 }) => {
  const [fireworks, setFireworks] = useState<FireworkProps[]>([]);

  useEffect(() => {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    const newFireworks = Array.from({ length: count }, () => ({
      color: colors[Math.floor(Math.random() * colors.length)],
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: 0.5 + Math.random() * 0.5,
    }));
    setFireworks(newFireworks);

    const timer = setTimeout(() => {
      setFireworks([]);
    }, duration * 1000);

    return () => clearTimeout(timer);
  }, [count, duration]);

  return (
    <div className={styles.fireworksContainer}>
      {fireworks.map((props, index) => (
        <Firework key={index} {...props} />
      ))}
    </div>
  );
};

export default Fireworks;