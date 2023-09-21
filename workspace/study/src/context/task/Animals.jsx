import React, { useContext } from "react";
import { AnimalContext } from "./AnimalContext";

const Animals = ({ styleFlex, styleList }) => {
  const { state, action } = useContext(AnimalContext);
  const animalList = state.animals.map((animal, i) => (
    <li style={styleList} key={i}>
      <button onClick={() => {action.remove(i)}}>{animal}</button>
    </li>
  ));

  return <ul style={styleFlex}>{animalList}</ul>;
};

export default Animals;
