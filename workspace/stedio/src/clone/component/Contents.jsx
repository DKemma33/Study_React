import React, { useContext } from "react";
import { useSelector } from "react-redux";
import Content from "./Content";
import { ContentContext } from "../context/ContentContext";

const Contents = () => {
  const {users} = useContext(ContentContext);
  const selectedTag = useSelector((state) => state.selectedTag)
  const userList = users.filter((content) => {
    if(selectedTag === "전체"){
      return true;
    }
    return content.category === selectedTag;
  })
  .map(({ id, nickname, category, intro, image }) => (
    <Content key={id} nickname={nickname} category={category} intro={intro} image={image} />
  ));
  return (
    <div className="list-container">
      <div className="lists" draggable="true">
        {userList}
      </div>
    </div>
  );
};

export default Contents;
