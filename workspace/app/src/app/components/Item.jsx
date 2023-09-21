import React from "react";

const Item = ({
  index,
  content,
  price,
  isEnter,
  onMouseOverToEnter,
  onMouseOutToLeave,
}) => {
  // isEnter 상태 값에 따라 'enter' 또는 'leave' 출력
  const enterLeaveText = isEnter[index] ? "enter" : "leave";

  return (
    <li
      className={enterLeaveText}
      onMouseOver={() => onMouseOverToEnter(index)} // onMouseOver 이벤트 핸들러 호출
      onMouseOut={() => onMouseOutToLeave(index)} // onMouseOut 이벤트 핸들러 호출
    >
      <div className="select">
        <p className="select-content">
          <span>{content}</span>
        </p>
        <div className="select-price">
          <div>{price}</div>
        </div>
      </div>
    </li>
  );
};

export default Item;
