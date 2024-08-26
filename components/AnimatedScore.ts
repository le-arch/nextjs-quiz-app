// components/AnimatedScore.tsx
import React from 'react';
import { useSpring, animated } from 'react-spring';

interface AnimatedScoreProps {
  score: number;
  totalQuestions: number;
}

const AnimatedScore: React.FC<AnimatedScoreProps> = ({ score, totalQuestions }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: score,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return (
    <div className="score-container">
      <animated.span>{number.to((n) => n.toFixed(0))}</animated.span>
      <span> / {totalQuestions}</span>
    </div>
  );
};

export default AnimatedScore;