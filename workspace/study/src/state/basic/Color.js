import React, { useState } from 'react';

const Color = () => {
  const [color, setColor] = useState();
  const onRed = () => {setColor("red")};
  const onBlue = () => {setColor("blue")};
  const onPink = (e) => {if(e.target.value === "핑크색"){
    setColor("pink")
  }};
  const onRemove = () => {
  const text = document.querySelector('input[type="text"]')
  if (text) {
    text.value = '';
  }};

  return (
    <div>
      <button onClick={onRed}>빨강</button>
      <button onClick={onBlue}>파랑</button>
      <span style={{color:color}}>즐거운 리액트~😀</span>
      <input onChange={onPink} type='text'/>
      <button onClick={onRemove}>초기화</button>
    </div>
  );
};  

export default Color;