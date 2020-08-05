import React from 'react';
import { useDispatch } from 'react-redux';
import {restartGame} from '../../store/actions';
import './RestartGame.scss';

export const RestartGame = () => {
  const dispatch = useDispatch() 
  
  const handlerClick = () => {
    dispatch(restartGame())
  }

  return (
    <button
      className="restart_btn"
      onClick={() => handlerClick()}
    >
      Restart game
    </button>
  );
}

