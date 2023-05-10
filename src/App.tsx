import React, { useState } from 'react';
import './App.css';


const App: React.FC = () => {

  const [counter, setCounter] = useState({
    c1: 10,
    c2: 10,
  })

  const commonMinus = () => {
    setCounter((actual) => {
      return {
        ...actual,
        c1: actual.c1 - 1,
        c2: actual.c2 - 1
      }
    })
  }

  console.log('render app')

  return (
    <div className="App">
      <div>
        <div>ivan</div>
        <div>{counter.c1}</div>
        <button onClick={() => {
          setCounter((actual) => {
            return {
              ...actual,
              c1: actual.c1 + 1
            }
          })
        }}>+</button>
      </div>
      <hr />
      <div>
        <div>petya</div>
        <div>{counter.c2}</div>
        <button onClick={() => {
          setCounter((actual) => {
            return {
              ...actual,
              c2: actual.c2 + 1
            }
          })
        }}>+</button>
      </div>
      <hr />
      <button onClick={commonMinus}>-</button>
      <button onClick={() => {
        setCounter((actual) => {
          return {
            ...actual,
            c1: 10,
            c2: 10
          }
        })
      }
      }>reset</button>
    </div >
  );
}

export default App;
