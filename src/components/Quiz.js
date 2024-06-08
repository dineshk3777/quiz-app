import React from 'react';
import './Quiz.css'
import { useSelector, useDispatch } from 'react-redux';
import { answerQuestion, submitQuiz, nextQuestion, previousQuestion } from '../features/quiz/quizSlice';

function Quiz() {
  const dispatch = useDispatch();
  const questions = useSelector(state => state.quiz.questions);
  const currentQuestionIndex = useSelector(state => state.quiz.currentQuestionIndex);
  const totalQuestions = questions.length;
  const selectedTopic = useSelector(state => state.quiz.selectedTopic.charAt(0).toUpperCase() + state.quiz.selectedTopic.slice(1));

  const handleAnswerSelect = (answer) => {
    dispatch(answerQuestion({ questionIndex: currentQuestionIndex, answer }));
  };

  const handleNextQuestion = () => {
    dispatch(nextQuestion());
  };

  const handlePreviousQuestion = () => {
    dispatch(previousQuestion());
  };

  const handleSubmitQuiz = () => {
    dispatch(submitQuiz());
  };

  return (
    <div>
      <h2 className='quiz-heading'>Quiz: {selectedTopic}</h2>
      <div className='quiz-container'>
      <p>Question {currentQuestionIndex + 1} of {totalQuestions}:</p>
      <p>{questions[currentQuestionIndex].question}</p>
      <ul>
        {questions[currentQuestionIndex].options.map(option => (
          <li key={option}>
            <button onClick={() => handleAnswerSelect(option)} className='options'>{option}</button>
          </li>
        ))}
      </ul>
      </div>
      <div>
        <div className='buttons-container'>
        {currentQuestionIndex > 0 && (
          <button onClick={handlePreviousQuestion} className='previous-question'>Previous Question</button>
        )}
        {currentQuestionIndex < totalQuestions - 1 && (
          <button onClick={handleNextQuestion} className='next-question'>Next Question</button>
        )}
        {currentQuestionIndex === totalQuestions - 1 && (
          <button onClick={handleSubmitQuiz} className='submit'>Submit</button>
        )}
        </div>
      </div>
    </div>
  );
}

export default Quiz;