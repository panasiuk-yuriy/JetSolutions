import React from 'react';
import './App.scss';
import { Tile } from './components/Tile/Tile';
import { getTiles, getCounter } from './store/selectors';
import { useSelector } from 'react-redux';
import { RestartGame } from './components/RestartGame/RestartGame';

function App() {
  const tiles = useSelector(getTiles);
  const counter = useSelector(getCounter)

  return (
    <main className="tiles">
      <div className="tiles__score">
        <p className="tiles__score--title">Number of attempts:</p>
        <h3 className="tiles__couter">{Math.floor(counter)}</h3>
      </div>
      {tiles.every((tile) => tile.isOpen)
        ? <RestartGame />
        : (
          <div className="tiles__container">
            {tiles.map((tile) => (
              <Tile key={tile.id} tile={tile} />
            ))}
          </div>
          )
      }
    </main>
  );
}

export default App;
