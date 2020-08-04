import React from 'react';
import './App.scss';
import { Tile } from './components/Tile/Tile';
import { getTiles, getCouter } from './store/index';
import { useSelector } from 'react-redux';
import { RestartGame } from './components/RestartGame/RestartGame';

function App() {
  const tiles: Tile[] = useSelector(getTiles);
  const counter: number = useSelector(getCouter);

  return (
    <main className="tiles">
      <div className="tiles__score">
        <p className="tiles__score--title">Number of attempts:</p>
        <h3 className="tiles__couter">{counter}</h3>
      </div>
      {tiles.every((tile: Tile) => tile.isOpen)
        ? <RestartGame />
        : (
          <div className="tiles__container">
            {tiles.map((tile: Tile) => (
              <Tile key={tile.id} tile={tile} />
            ))}
          </div>
          )
      }
    </main>
  );
}

export default App;
