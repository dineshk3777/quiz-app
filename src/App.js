import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import TopicSelection from './components/TopicSelection';
import Quiz from './components/Quiz';
import Result from './components/Result';

function App() {
  const selectedTopic = useSelector(state => state.quiz.selectedTopic);
  const score = useSelector(state => state.quiz.score);

  return (
    <div>
      {!selectedTopic && <h1 className='head'>Quiz App</h1>}
      {!selectedTopic && <TopicSelection />}
      {selectedTopic && score === 0 && <Quiz />}
      {score > 0 && <Result />}
    </div>
  );
}

export default App;