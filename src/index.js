import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import quizReducer from './features/quiz/quizSlice';
import App from './App';

const store = configureStore({
  reducer: {
    quiz: quizReducer
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);