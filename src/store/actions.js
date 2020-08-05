export const ACTION_TYPES = {
  CHANGE_TILE_STATUS: 'CHANGE_TILE_STATUS',
  CHECK_TILES: 'CHECK_TILES',
  CHANGE_PREV_TILE: 'CHANGE_PREV_TILE',
  RESTART_GAME: 'RESTART_GAME',
  CHANGE_COUNT: 'CHANGE_COUNT',
};

export const changeTileStatus = (tile) => ({
  type: ACTION_TYPES.CHANGE_TILE_STATUS, tile,
});

export const checkTiles = () => ({
  type: ACTION_TYPES.CHECK_TILES,
});

export const changePrevTile = (tile) => ({ 
  type: ACTION_TYPES.CHANGE_PREV_TILE, tile 
});

export const restartGame = () => ({
  type: ACTION_TYPES.RESTART_GAME,
});
