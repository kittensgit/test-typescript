import React, { useState } from 'react';
import './App.css';


const App: React.FC = () => {

  const [player1Counter, setPlayer1Counter] = useState(10)
  const [player2Counter, setPlayer2Counter] = useState(10)

  const commonMinus = () => {
    setPlayer1Counter((actual) => actual - 1)
    setPlayer2Counter((actual) => actual - 1)
  }

  console.log('render app')

  return (
    <div className="App">
      <div>
        <div>ivan</div>
        <div>{player1Counter}</div>
        <button onClick={() => { setPlayer1Counter((actual) => actual + 1) }}>+</button>
      </div>
      <hr />
      <div>
        <div>petya</div>
        <div>{player2Counter}</div>
        <button onClick={() => { setPlayer2Counter((actual) => actual + 1) }}>+</button>
      </div>
      <hr />
      <button onClick={commonMinus}>-</button>
      <button onClick={() => {
        setPlayer1Counter(10)
        setPlayer2Counter(10)
      }
      }>reset</button>
    </div >
  );
}

export default App;
