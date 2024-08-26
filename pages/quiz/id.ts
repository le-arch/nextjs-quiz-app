import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Quiz from '../../components/Quiz';
import { useQuizStore } from '../../lib/store';
import styles from '../../styles/QuizPage.module.css';

interface QuizData {
  id: string;
  title: string;
  questions: any[];
}

interface QuizPageProps {
  quizData: QuizData;
}

const QuizPage: React.FC<QuizPageProps> = ({ quizData }) => {
  const router = useRouter();
  const { id } = router.query;
  const { setCurrentQuiz } = useQuizStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (quizData) {
      setCurrentQuiz(quizData.questions);
      setLoading(false);
    }
  }, [quizData, setCurrentQuiz]);

  if (loading) {
    return <div className={styles.loading}>Loading quiz...</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{quizData.title}</h1>
      <Quiz />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };

  try {
    // Replace this with your actual API endpoint
    const response = await axios.get(`${process.env.API_URL}/api/quizzes/${id}`);
    const quizData = response.data;

    return {
      props: {
        quizData,
      },
    };
  } catch (error) {
    console.error('Error fetching quiz data:', error);
    return {
      notFound: true,
    };
  }
};

export default QuizPage;