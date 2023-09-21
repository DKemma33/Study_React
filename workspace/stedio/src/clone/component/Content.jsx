import React from "react";

const Content = ({nickname, category, intro, image}) => {
  return (
    <div className="list">
      <button type="button">
        <div className="profile-image">
          <span>
            <img src={"/steadio/" + image} alt="" />
          </span>
          <div className="border"></div>
        </div>
        <h2 className="nickname">{nickname}</h2>
        <p className="category">{category}</p>
        <p className="intro">{intro}</p>
      </button>
    </div>
  );
};

export default Content;
