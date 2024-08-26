// components/CountdownTimer.tsx
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from '../styles/CountDownTimer.module';

interface CountdownTimerProps {
  duration: number;
  onTimeUp: () => void;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ duration, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  const { width } = useSpring({
    from: { width: '100%' },
    to: { width: '0%' },
    config: { duration: duration * 1000 },
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          onTimeUp();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onTimeUp]);

  return (
    <div className={styles.timerContainer}>
      <animated.div className={styles.timerBar} style={{ width }} />
      <div className={styles.timerText}>{timeLeft}s</div>
    </div>
  );
};

export default CountdownTimer;