import React from 'react';
import QuizCard from '../components/QuizCard';
import SearchBar from '../components/SearchBar';

const Home: React.FC = () => {
  // Fetch quiz categories from API

  return (
    <div>
      <h1>Quiz Categories</h1>
      <SearchBar />
      {/* Map through categories and render QuizCard components */}
    </div>
  );
};

export default Home;