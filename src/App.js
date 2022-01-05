import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  let arr = [
    ['white', 'white', 'white', 'white', 'white', 'white'],
    ['white', 'white', 'white', 'white', 'white', 'white'],
    ['white', 'white', 'white', 'white', 'white', 'white'],
    ['white', 'white', 'white', 'white', 'white', 'white'],
    ['white', 'white', 'white', 'white', 'white', 'white'],
    ['white', 'white', 'white', 'white', 'white', 'white'],
    ['white', 'white', 'white', 'white', 'white', 'white'],
  ];
  const [turns, setTurns] = useState('red');
  const [game, setGame] = useState(arr);
  const [stat, setstat] = useState([5, 5, 5, 5, 5, 5, 5]);
  const onButtonturn = (index) => {
    if (stat[index] === -1) return
    let temp = [...game];
    temp[index][stat[index]] = turns;
    let tem = [...stat];
    tem[index] = tem[index] - 1;
    setGame(temp);
    setstat(tem);
    if (turns == 'red') {
      setTurns('blue');
    } else {
      setTurns('red');
    }
  };
  return (
    <div className="main_div">
      {game.map((balls, idx) => {
        return (
          <div className="child">
            <button
              key={idx}
              onClick={() => {
                onButtonturn(idx);
              }}
            >
              .
            </button>
            {balls.map((item, id) => {
              return (
                <div key={id} className="boxes">
                  <button
                    style={{ backgroundColor: item }}
                    key={id}
                    className="ele"
                  ></button>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
