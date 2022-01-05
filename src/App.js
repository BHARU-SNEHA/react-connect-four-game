import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  let arr = [0, 0, 0, 0, 0, 0, 0].fill([
    'white',
    'white',
    'white',
    'white',
    'white',
    'white',
  ]);
  const [turns, setTurns] = useState('Red');
  const [game, setGame] = useState(arr);
  const onButtonturn = (index) => {
    console.log(index);
  };
  return (
    <div className="main_div">
      {arr.map((balls, idx) => {
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
                <div className="boxes">
                  <button
                    style={{ 'background-color': item }}
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
