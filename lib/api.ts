import axios from 'axios';

const BASE_URL = 'https://opentdb.com/api.php';

export const fetchQuizzes = async (amount: number, category?: number, difficulty?: string) => {
  const response = await axios.get(BASE_URL, {
    params: {
      amount,
      category,
      difficulty,
      type: 'multiple'
    }
  });
  return response.data.results;
};

export const fetchCategories = async () => {
  const response = await axios.get('https://opentdb.com/api_category.php');
  return response.data.trivia_categories;
};