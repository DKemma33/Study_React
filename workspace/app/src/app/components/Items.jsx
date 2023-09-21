import React from "react";
import Item from "./Item";

const Items = ({ items, isEnter, onMouseOverToEnter, onMouseOutToLeave }) => {
  return (
    <ul>
      {items.map(({ id, content, price },index) => (
        <Item
          index={index}
          key={id}
          content={content}
          price={price}
          isEnter={isEnter}
          onMouseOverToEnter={onMouseOverToEnter}
          onMouseOutToLeave={onMouseOutToLeave}
        />
      ))}
    </ul>
  );
};

export default Items;
