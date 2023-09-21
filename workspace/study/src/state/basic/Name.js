import React, { useState } from 'react';

const Name = () => {
  const [name, setName] = useState("");
  const onNames = (e) => {setName(e.target.value)};
  return (
    <div>
      <div>{name}</div>
      <input onChange={onNames}/>
    </div>
  );
};

export default Name;