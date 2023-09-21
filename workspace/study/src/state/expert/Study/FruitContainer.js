import React, { useRef, useState } from 'react';

const FruitContainer = () => {
  const [fruits, setFruits] = useState([]);
  const inputRef = useRef([]);
  const onClickAdd = () => {
    setFruits(
      fruits.concat({
        name: inputRef.current[0].value,
        color: inputRef.current[1].value,
      }
      ));
      name: inputRef.current[0].value="";
      color: inputRef.current[1].value="";  
};
  return (
    <div>
      <div>
        <ul>
          {fruits.map((fruit, i) => (<li>{fruit.name}({fruit.color})</li>))}
        </ul>
        <input 
        placeholder='과일 이름'
        ref={(element) => {inputRef.current[0] = element}}
        />
        <input 
        placeholder='과일 색갈'
        ref={(element) => {inputRef.current[1] = element}}
        />
      </div>
      <div>
        <button onClick={onClickAdd}>추가</button>
        <button>삭제</button>
      </div>
    </div>
  );
};

export default FruitContainer;