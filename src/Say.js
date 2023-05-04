import React from 'react';
import { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("black");
  const onclickEnter = () => setMessage("안녕하세요");
  const onclickLeave = () => setMessage("안녕히 가세요");
  return (
    <div>
      <button onClick={onclickEnter}>입장</button>
      <button onClick={onclickLeave}>퇴장</button>
      <h1 style={{color}}>{message}</h1>

      <button 
       style={{color:'red'}} 
       onClick={() => {
        setColor('red')
        }}
      >
      빨간색
      </button>

      <button 
        style={{color:'green'}}
        onClick={() => {
         setColor('green')
        }}
      >
      초록색
      </button>

      <button 
      style={{color:'blue'}} 
      onClick={() => {
        setColor('blue')
        }}
      >
      파란색
      </button>
    </div>
  );
};

export default Say;