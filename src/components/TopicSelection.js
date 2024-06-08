import React from 'react';
import './TopicSelection.css';
import { useDispatch } from 'react-redux';
import { selectTopic } from '../features/quiz/quizSlice';

function TopicSelection() {
  const dispatch = useDispatch();

  const handleTopicSelect = (topic) => {
    dispatch(selectTopic(topic));
  };

  return (
    <div>
      <h2 className='topic-heading'>Select your favourite topic from below options:</h2>
      <div className='topic-button'>
      <button onClick={() => handleTopicSelect('geography')} className='button-first'>Geography</button>
      <button onClick={() => handleTopicSelect('history')} className='button-second'>History</button>
      <button onClick={() => handleTopicSelect('currentAffairs')} className='button-third'>Current Affairs</button>
      </div>
    </div>
  );
}

export default TopicSelection;