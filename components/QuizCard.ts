// components/QuizCard.tsx
import React from 'react';
import styles from '../styles/QuizCard.module.css';

interface QuizCardProps {
  title: string;
  difficulty: string;
  onStart: () => void;
}

const QuizCard: React.FC<QuizCardProps> = ({ title, difficulty, onStart }) => {
  return (
    <article className={styles.card}>
      <h3>{title}</h3>
      <p>Difficulty: <span aria-label={`Difficulty level: ${difficulty}`}>{difficulty}</span></p>
      <button onClick={onStart} aria-label={`Start ${title} quiz`}>
        Start Quiz
      </button>
    </article>
  );
};

export default QuizCard;