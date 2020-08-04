import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTileStatus, checkTiles } from '../../store/tiles';
import { changePrevTile } from '../../store/prevTile';
import { changeCount } from '../../store/counter';
import { getPrevTile } from '../../store/index';
import './Tile.scss';

interface Props {
  tile: Tile;
}

export const Tile: React.FC<Props> = ({ tile }) => {
  const prevTile = useSelector(getPrevTile);
  const dispatch = useDispatch()


  const handlerClick = () => {
    dispatch(changeTileStatus(tile))
    dispatch(changeCount())
    if (!prevTile) {
      dispatch(changePrevTile(tile))
    }

    if (prevTile && prevTile.color === tile.color) {
      dispatch(checkTiles(tile.color))
      dispatch(changePrevTile(null))
    }

    if (prevTile && prevTile.color !== tile.color) {
      dispatch(changePrevTile(tile))
    } 
  };

  return (
    <>
      {(tile.nowOpen || tile.isOpen) ? (
        <div 
          style={{ backgroundColor: tile.color}}
          className={tile.isOpen ? 'tile-open' : 'tile flip-vertical-left '} >

        </div>) : (
          <div className='tile' onClick={() => handlerClick()}>

        </div>)}

    </>
  );
}

