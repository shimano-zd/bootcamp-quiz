import React, { useState, useEffect } from 'react';
import { quiz } from './api/data';
import './App.css';
import { AmountLadder } from './api/ladder/amounts';
import { LadderRanks } from './components/ladder/ladderRanks';
import { LadderJokers } from './components/ladder/jokers';
import { BackgroundImage } from './components/background/background';
import { AudienceJoker } from './components/audienceJoker/AudienceJoker';

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
  amountWon: 0,
  gameOverVisible: false,
  milestoneReached: undefined,
  audienceJokerVisible: false
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
        amountReached: AmountLadder()[nextRank],
        amountWon: AmountLadder()[nextRank - 1],
        audienceJokerVisible: false
      });
    } else {
      setState({
        ...state,
        audienceJokerVisible: false,
        gameOverVisible: true
      });
    }
  };

  const handleAudienceClick = () => {
    setState({
      ...state,
      audienceJokerVisible: true
    });
  };
  const resetGame = () => {
    setState({
      currentQuestionIndex: 0,
      currentQuestion: quiz.questions[Math.floor(Math.random() * quiz.questions.length)],
      playerAnswer: undefined,
      rankReached: 0,
      amountReached: AmountLadder()[0],
      gameOverVisible: false,
      amountWon: 0,
      audienceJokerVisible: false
    });
  };
  /**The presentation (View). For now only the current question text and buttons for possible answers*/
  return (
    <div className='mainContainer'>
      {state.audienceJokerVisible ? <AudienceJoker /> : null}

      <BackgroundImage />
      <div className='ladder'>
        <LadderJokers audienceClicked={() => handleAudienceClick()} />
        <LadderRanks highlightedRank={state.amountReached} />
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
        <div className='gameOverScreen'>
          <div className='gameOverModal'>
            <p>Nažalost, to je netočno.</p>
            <i class='fas fa-times-circle' />
            <p style={{ fontWeight: '600' }}>
              Osvojili ste: <span style={{ color: 'orange', fontSize: '25px' }}>{state.amountWon} KN. </span>
            </p>
            <div className='gameOverModalButton' onClick={() => resetGame()}>
              RESTART
            </div>
          </div>

          <div className='gameOverBackground' />
        </div>
      ) : null}
    </div>
  );
}
