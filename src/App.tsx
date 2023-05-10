import React, { useState } from 'react';
import './App.css';
import { UsersType } from '.';

const users: UsersType = [
  [40, 20],
  [10, 20],
  [1, 2]
]

function findMax(users: UsersType) {
  let maxPair = null
  for (let i = 0; i < users.length; i++) {
    if (maxPair === null) {
      maxPair = users[i]
    } else if (Math.max(users[i][0], users[i][1]) > Math.max(maxPair[0], maxPair[1])) {
      maxPair = users[i]
    }
  }
  return maxPair
}


const App = () => {



  const [plauer1, setPlayer1] = useState(() => {
    let pair = findMax(users)
    if (pair === null) {
      return 10
    }
    return pair[0]
  })
  const [plauer2, setPlayer2] = useState(()=>{
    let pair = findMax(users)
    if (pair === null) {
      return 10
    }
    return pair[1]
  })

  return (
    <div className="App">
      <div>
        <div>ivan</div>
        <div>{plauer1}</div>
        <button onClick={() => {
          setPlayer1((actual) => actual + 1)
        }}>+</button>
      </div>
      <hr />
      <div>
        <div>petya</div>
        <div>{plauer2}</div>
        <button onClick={() => {
          setPlayer2((actual) => actual + 1)
        }}>+</button>
      </div>
      <hr />
      <button onClick={() => { 
       setPlayer1((actual) => actual - 1)
       setPlayer2((actual) => actual - 1)}}>-</button>
      <button onClick={() => {
          setPlayer1(10)
          setPlayer2(10)
        }}>reset</button>
    </div >
  );
}

export default App;
