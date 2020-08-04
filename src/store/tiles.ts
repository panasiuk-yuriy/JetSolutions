import { AnyAction } from 'redux';
import { tiles } from '../helpers/tiles';

const CHANGE_TILE_STATUS = 'CHANGE_TILE_STATUS';
const CHECK_TILES = 'CHECK_TILES';
const RESTART_GAME = 'RESTART_GAME'

export const changeTileStatus = (tile :Tile) => ({ type: CHANGE_TILE_STATUS, tile });
export const checkTiles = (color: string) => ({ type: CHECK_TILES, color });
export const restartGame = () => ({ type: RESTART_GAME });

const reducer = (state = tiles, action: AnyAction) => {
  switch (action.type) {

    case CHANGE_TILE_STATUS:
      return state.map(tile => {
        if (tile.id === action.tile.id) {
          return {...tile, nowOpen: true}
        } else {
          return {...tile, nowOpen: false}
        }
      })
    
    case CHECK_TILES:
    return state.map(tile => {
      if (tile.color === action.color) {
        return {...tile, isOpen: true,}
      } else {
        return tile
      }
    })

    case RESTART_GAME:
    return state.map(tile => {
      return {...tile, isOpen: false, nowOpen: false}
    })
    
    default:
      return state;
  }
};

export default reducer;
