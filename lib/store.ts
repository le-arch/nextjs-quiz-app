import create from 'zustand';

interface AppState {
  user: any;
  theme: 'light' | 'dark';
  setUser: (user: any) => void;
  toggleTheme: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  user: null,
  theme: 'light',
  setUser: (user) => set({ user }),
  toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
}));

interface QuizState {
  currentQuiz: any;
  currentQuestion: number;
  score: number;
  setCurrentQuiz: (quiz: any) => void;
  setCurrentQuestion: (questionNumber: number) => void;
  incrementScore: () => void;
}

export const useQuizStore = create<QuizState>((set) => ({
  currentQuiz: null,
  currentQuestion: 0,
  score: 0,
  setCurrentQuiz: (quiz) => set({ currentQuiz: quiz, currentQuestion: 0, score: 0 }),
  setCurrentQuestion: (questionNumber) => set({ currentQuestion: questionNumber }),
  incrementScore: () => set((state) => ({ score: state.score + 1 })),
}));