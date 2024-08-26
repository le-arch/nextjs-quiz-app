// pages/quiz/result.tsx
import React, { useEffect } from 'react';
import { useQuizStore } from '../../lib/store';
import styles from '../../styles/QuizResult.module.css';

const QuizResult: React.FC = () => {
  const { score, currentQuiz } = useQuizStore();
  const [showFireworks, setShowFireworks] = useState(false);

    useEffect(() => {
        if (score === currentQuiz.length) {
          setShowFireworks(true);
          const timer = setTimeout(() => setShowFireworks(false), 5000);
          return () => clearTimeout(timer);
        }
      }, [score, currentQuiz]);

  return (
    <div className={styles.resultContainer}>
      <h1 className={styles.fadeIn}>Quiz Completed!</h1>
      <p className={styles.scoreReveal}>
        Your score: {score} / {currentQuiz.length}
      </p>
      {showFireworks && <Fireworks duration={5} count={20} />}
      {score === currentQuiz.length && (
        <div className={styles.perfectScore}>Perfect Score! 🎉</div>
    )}
    </div>
  );
};

export default QuizResult;