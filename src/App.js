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
  currentQuestion: quiz.questions[Math.floor(Math.random() * quiz.questions.length)],
  rankReached: 0,
  amountReached: AmountLadder()[0],
  gameOverVisible: false
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

  /**This is the answer click  handler function. We will attach this to the button that presents offered answer.
   * The parameter "playerAnswer" contains the selected answer ("A","B","C" or "D")
   */
  const handlePlayerAnswerSelected = playerAnswer => {
    let nextRank;
    let nextQuestion;

    if (playerAnswer === state.currentQuestion.correctAnswer) {
      nextRank = state.rankReached + 1;
      nextQuestion = quiz.questions[Math.floor(Math.random() * quiz.questions.length)];

      setState({
        ...state,
        rankReached: nextRank,
        currentQuestion: nextQuestion,
        amountReached: AmountLadder()[nextRank]
      });
    } else {
      setState({
        ...state,
        gameOverVisible: true
      });
    }
    console.log(state.amountReached);
  };

  const resetGame = () => {
    setState({
      currentQuestionIndex: 0,
      currentQuestion: quiz.questions[Math.floor(Math.random() * quiz.questions.length)],
      playerAnswer: undefined,
      rankReached: 0,
      amountReached: AmountLadder()[0],
      gameOverVisible: false
    });
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
          <div className='questionText'>{state.currentQuestion.text}</div>
          <div className='questionAnswerFirstRow'>
            <div className='questionAnswerA' onClick={() => handlePlayerAnswerSelected('A')}>
              A: {state.currentQuestion.answers.A}
            </div>
            <div className='questionAnswerB' onClick={() => handlePlayerAnswerSelected('B')}>
              B: {state.currentQuestion.answers.B}
            </div>
          </div>
          <div className='questionAnswerSecondRow'>
            <div className='questionAnswerC' onClick={() => handlePlayerAnswerSelected('C')}>
              C: {state.currentQuestion.answers.C}
            </div>
            <div className='questionAnswerD' onClick={() => handlePlayerAnswerSelected('D')}>
              D: {state.currentQuestion.answers.D}
            </div>
          </div>
        </div>
      </div>

      {state.gameOverVisible ? (
        <div className='gameOverModal'>
          <p>Nažalost, to je netočno.</p>
          <i class='fas fa-check-circle' />
          <p>Osvojili ste: {state.amountReached} KN.</p>
          <div className='gameOverModalButton' onClick={() => resetGame()}>
            OK
          </div>
        </div>
      ) : null}
    </div>
  );
}
