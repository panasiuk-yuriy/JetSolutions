import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTileStatus, changePrevTile, checkTiles } from '../../store/actions';
import { getSelectedTiles, getTiles } from '../../store/selectors';
import PropTypes from 'prop-types';
import './Tile.scss';

export const Tile = ({ tile }) => {
  const dispatch = useDispatch()
  const selectedTiles = useSelector(getSelectedTiles);
  const tiles = useSelector(getTiles)

  const handlerClick = () => {
    if (tiles.filter(tile => tile.nowOpen).length < 2) {
      dispatch(changePrevTile(tile))
      dispatch(changeTileStatus(tile))

      if (selectedTiles.length === 1) {
        setTimeout(() => {
          dispatch(checkTiles())
        }, 400)
      }
    }
  };

  return (
    <>
      {(tile.nowOpen || tile.isOpen) ? (
        <div
          style={{ backgroundColor: tile.color }}
          className={tile.isOpen ? 'tile-open' : 'tile flip-vertical-left '} >
        </div>) 
        : (
            <div
              className='tile'
              role="presentation"
              onClick={() => handlerClick()}
            >
            </div>
          )
      }
    </>
  );
}

Tile.propTypes = {
  tile: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nowOpen: PropTypes.bool.isRequired,
    isOpen: PropTypes.bool.isRequired,
    color: PropTypes.string.isRequired,
  })
};
