import React, { useState } from 'react';

const Sounds = () => {
    const [sound, setSound] = useState();
    const onDogSound = () => {setSound("멍멍")};
    const onCatSound = () => {setSound("야옹")};
  return (
    <>
      <div>{sound}</div>
      <button onClick={onDogSound}>개</button>
      <button onClick={onCatSound}>고양이</button>
    </>
  );
};

export default Sounds;