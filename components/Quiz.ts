// components/Quiz.tsx
import React, { useState, useEffect } from 'react';
import { useQuizStore } from '../lib/store';
import AnimatedScore from './AnimatedScore';
import CountdownTimer from './CountdownTimer';
import styles from '../styles/Quiz.module.css';

const QUESTION_DURATION = 15; // 15 seconds per question

const Quiz: React.FC = () => {
  const { currentQuiz, currentQuestion, score, setCurrentQuestion, incrementScore } = useQuizStore();
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    setSelectedAnswer('');
    setShowResult(false);
    setIsCorrect(false);
  }, [currentQuestion]);

  const handleAnswer = (answer: string) => {
    if (showResult) return;
    setSelectedAnswer(answer);
    setShowResult(true);
    const correct = answer === currentQuiz[currentQuestion].correct_answer;
    setIsCorrect(correct);
    if (correct) {
      incrementScore();
    }
  };

  const handleNext = () => {
    if (currentQuestion < currentQuiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz finished, navigate to results page
    }
  };

  const handleTimeUp = () => {
    if (!showResult) {
      setShowResult(true);
      setIsCorrect(false);
    }
  };

  if (!currentQuiz) return <div>Loading...</div>;

  const question = currentQuiz[currentQuestion];

  return (
    <div className={styles.quizContainer}>
      <AnimatedScore score={score} totalQuestions={currentQuiz.length} />
      <CountdownTimer duration={QUESTION_DURATION} onTimeUp={handleTimeUp} />
      {question.image_url && (
        <div className={styles.imageContainer}>
          <Image
            src={question.image_url}
            alt="Question Image"
            width={400}
            height={300}
            layout="responsive"
            objectFit="contain"
          />
        </div>
      )}
      <h2>{question.question}</h2>
      <div className={styles.answerContainer}>
        {[...question.incorrect_answers, question.correct_answer]
          .sort(() => Math.random() - 0.5)
          .map((answer) => (
            <button 
              key={answer} 
              onClick={() => handleAnswer(answer)}
              disabled={showResult}
              className={`${styles.answerButton} ${
                showResult && answer === question.correct_answer ? styles.correct : ''
              } ${
                showResult && answer === selectedAnswer && !isCorrect ? styles.incorrect : ''
              }`}
            >
              {answer}
            </button>
          ))}
      </div>
      {showResult && (
        <div className={styles.resultContainer}>
          <p className={isCorrect ? styles.correctText : styles.incorrectText}>
            {isCorrect ? 'Correct!' : 'Incorrect!'}
          </p>
          <button onClick={handleNext} className={styles.nextButton}>Next</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;