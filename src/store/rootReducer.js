import { ACTION_TYPES } from './actions';
import { tiles } from '../helpers/tiles';

const initialState = {
  tiles,
  selectedTile: [],
  counter: 0,
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.CHANGE_TILE_STATUS:
      return {
        ...state,
        counter: state.counter + 1 / 2,
        tiles: state.tiles.map(tile => {
          if (tile.id === action.tile.id) {
            return { ...tile, nowOpen: true }
          }
          return tile
        })
      };
    case ACTION_TYPES.CHANGE_PREV_TILE:
      if (state.selectedTile.length > 1) {
        return {
          ...state,
          selectedTile: [action.tile]
        }
      }
      return { ...state, selectedTile: [...state.selectedTile, action.tile] }

    case ACTION_TYPES.CHECK_TILES:
      if (state.selectedTile[0] && state.selectedTile[1]
        && (state.selectedTile[0].color === state.selectedTile[1].color)) {
        return {
          ...state,
          tiles: state.tiles.map(tile => {
            if (tile.color === state.selectedTile[1].color) {
              return { ...tile, isOpen: true, nowOpen: false }
            }
            return tile
          })
        }
      }
      if (state.selectedTile[0] && state.selectedTile[1]
        && (state.selectedTile[0].color !== state.selectedTile[1].color)) {
        return {
          ...state,
          tiles: state.tiles.map(tile => {
            return { ...tile, nowOpen: false }
          })
        }
      }
      break;

    case ACTION_TYPES.RESTART_GAME:
      return {
        ...state,
        counter: 0,
        tiles: state.tiles
          .sort(() => Math.random() - 0.5)
          .map(tile => {
            return { ...tile, isOpen: false, nowOpen: false }
          })
      };

    default:
      return state;
  }
}
