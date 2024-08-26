// lib/favorites.ts
export const addFavorite = (quizId: string) => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (!favorites.includes(quizId)) {
      favorites.push(quizId);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  };
  
  export const removeFavorite = (quizId: string) => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const updatedFavorites = favorites.filter((id: string) => id !== quizId);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };
  
  export const getFavorites = () => {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
  };