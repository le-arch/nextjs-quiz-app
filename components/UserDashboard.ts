// components/UserDashboard.tsx
import React, { useEffect, useState } from 'react';
import { useAppStore } from '../lib/store';
import { getUserQuizResults } from '../lib/api';

const UserDashboard: React.FC = () => {
  const user = useAppStore((state) => state.user);
  const [quizResults, setQuizResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      if (user) {
        const results = await getUserQuizResults(user.uid);
        setQuizResults(results);
      }
    };
    fetchResults();
  }, [user]);

  return (
    <div>
      <h1>Welcome, {user?.displayName}</h1>
      <h2>Your Quiz Results</h2>
      <ul>
        {quizResults.map((result, index) => (
          <li key={index}>
            {result.quizName}: {result.score}/{result.totalQuestions}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDashboard;