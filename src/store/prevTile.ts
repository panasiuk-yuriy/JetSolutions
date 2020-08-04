import { AnyAction } from 'redux';
const CHANGE_PREV_TILE = 'CHANGE_PREV_TILE';

export const changePrevTile = (tile: Tile | null) => ({ type: CHANGE_PREV_TILE, tile });

const reducer = (tile = null, action: AnyAction) => {
  switch (action.type) {
    case CHANGE_PREV_TILE:
     return action.tile;

    default:
      return tile;
  }
};

export default reducer;
