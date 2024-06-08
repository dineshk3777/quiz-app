import { createSlice } from '@reduxjs/toolkit';
import { geographyQuestions, historyQuestions, currentAffairsQuestions } from '../../data/questions';

const initialState = {
  selectedTopic: '',
  questions: [],
  currentQuestionIndex: 0,
  userAnswers: [],
  score: 0
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    selectTopic(state, action) {
      state.selectedTopic = action.payload;
      switch (action.payload) {
        case 'geography':
          state.questions = geographyQuestions;
          break;
        case 'history':
          state.questions = historyQuestions;
          break;
        case 'currentAffairs':
          state.questions = currentAffairsQuestions;
          break;
        default:
          state.questions = [];
      }
    },
    answerQuestion(state, action) {
      const { questionIndex, answer } = action.payload;
      state.userAnswers[questionIndex] = answer;
    },
    nextQuestion(state) {
      state.currentQuestionIndex += 1;
    },
    previousQuestion(state) {
      state.currentQuestionIndex -= 1;
    },
    submitQuiz(state) {
      state.userAnswers.forEach((answer, index) => {
        if (answer === state.questions[index].correctAnswer) {
          state.score++;
        }
      });
    }
  }
});

export const { selectTopic, answerQuestion, nextQuestion, previousQuestion, submitQuiz } = quizSlice.actions;
export default quizSlice.reducer;