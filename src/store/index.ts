import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import tilesReducer from './tiles';
import prevTileReducer from './prevTile';
import couterReducer from './counter';

export const getTiles = (state: RootState) => state.tiles;
export const getPrevTile = (state: RootState) => state.prevTile;
export const getCouter = (state: RootState) => state.counter;

const rootReducer = combineReducers(
  {
    tiles: tilesReducer,
    prevTile: prevTileReducer,
    counter: couterReducer
  },
);

export type RootState = ReturnType<typeof rootReducer>;

const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState') || '')
  : {};

const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(),
);

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;
