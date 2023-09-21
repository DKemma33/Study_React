import React, { useState } from 'react';
// input 태그의 값이 인스타 일 시 인스타 이미지 출력, 임수현 일 시 수현 이미지 출력
// 값이 다를 시 이미지 숨김
const Icon = () => {
  const [icon, setIcon] = useState("none");
  const [icon2, setIcon2] = useState("none");
  const onInsta = (e) => {
    if(e.target.value === "인스타"){
    setIcon("block")
  }else if(e.target.value === "임수현"){
    setIcon2("block") 
  }else{
    setIcon("none")
    setIcon2("none")
  }};


  return (
    <div>
      <img style={{display:icon}} src={'/images/icon1.png'}/>
      <img style={{display:icon2}} src={'/images/suhyeon.jpg'}/>
      <input onChange={onInsta}/>
    </div>
  );
};

export default Icon;