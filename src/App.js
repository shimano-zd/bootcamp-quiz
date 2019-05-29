import React, { useState, useEffect } from 'react';
import { quiz } from './api/data';
import './App.css';
import { AmountLadder } from './api/ladder/amounts';
import { LadderRanks } from './components/ladder/ladderRanks';
import { LadderJokers } from './components/ladder/jokers';
import { BackgroundImage } from './components/background/background';

/**
 * This is our game state object with initial values
 */
const gameState = {
  /**Index of a question the player is currently answering */
  currentQuestionIndex: 0,

  /**The answer that the player gave to the current question */
  playerAnswer: undefined,
  correctAnswer: undefined,
  amountReached: undefined
};

/**
 * @description
 * The "Application" component.. This is the root component of our Quiz app.
 */
export default function App() {
  /**
   * useState hook provides as with a current value of the state and a function that can update the state
   * @see https://reactjs.org/docs/hooks-state.html
   * */
  const [state, setState] = useState(gameState);

  /**
   * Take the current question from the quiz object using the question index from the state object */
  const question = quiz.questions[state.currentQuestionIndex];

  /**This is the answer click  handler function. We will attach this to the button that presents offered answer.
   * The parameter "playerAnswer" contains the selected answer ("A","B","C" or "D")
   */
  const handlePlayerAnswerSelected = playerAnswer => {
    console.log(playerAnswer);
    console.log(state.correctAnswer);
    if (playerAnswer === state.correctAnswer) {
      alert('Correct!');
    } else {
      alert('Wrong!');
    }
  };

  /**The presentation (View). For now only the current question text and buttons for possible answers*/
  return (
    <div className='mainContainer'>
      <BackgroundImage />
      <div className='ladder'>
        <LadderJokers />
        <LadderRanks />
      </div>
      <div className='questions'>
        <div className='questionWrapper'>
          <div className='questionText'>{question.text}</div>
          <div className='questionAnswerFirstRow'>
            <div className='questionAnswerA' onClick={() => handlePlayerAnswerSelected('A')}>
              A: {question.answers.A}
            </div>
            <div className='questionAnswerB' onClick={() => handlePlayerAnswerSelected('B')}>
              B: {question.answers.B}
            </div>
          </div>
          <div className='questionAnswerSecondRow'>
            <div className='questionAnswerC' onClick={() => handlePlayerAnswerSelected('C')}>
              C: {question.answers.C}
            </div>
            <div className='questionAnswerD' onClick={() => handlePlayerAnswerSelected('D')}>
              D: {question.answers.D}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
