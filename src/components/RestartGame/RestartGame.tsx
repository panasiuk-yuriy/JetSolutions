import React from 'react';
import {restartGame} from '../../store/tiles'
import {setDefaultCount} from '../../store/counter'
import { useDispatch } from 'react-redux';
import './RestartGame.scss';

export const RestartGame = () => {
  const dispatch = useDispatch() 
  
  const handlerClick = () => {
    dispatch(restartGame())
    dispatch(setDefaultCount())
  }

  return (
    <>
    <button className="restart_btn"
    onClick={() => handlerClick()}>
      Restart game
    </button>
    </>
  );
}

