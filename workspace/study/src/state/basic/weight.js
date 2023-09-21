import React, { useState } from 'react';
// 감자버튼 누를시 kg수 증가,이미지 출력, 운동 누를시 이미지 숨기기
const Weight = () => {
  const [weight, setWeight] = useState(50);
  const [fat, setFat] = useState("none")
  const onPotato= () => {setWeight (weight + 2); setFat("block");};
  const onNothing= () => {setWeight(weight - 1); setFat("none");};
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center", marginTop:"100px"}}>
      <img style={{display:fat ,width:"400px", height:"400px"}} src={'/images/jibange.jpg'}/>
      <div>{weight}kg</div>
      <button onClick={onPotato}>감자</button>
      <button onClick={onNothing}>운동</button>
    </div>
  )
};


export default Weight;