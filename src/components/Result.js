import React from 'react';
import './Result.css'
import { useSelector } from 'react-redux';

function Result() {
  const score = useSelector(state => state.quiz.score);

  return (
    <div className='result-container'>
      <h2 className='result-head'>Quiz Result</h2>
      <p className='result-score'>You have scored {score} out of 10.</p>
      <button className='homepage'>HomePage</button>
    </div>
  );
}

export default Result;