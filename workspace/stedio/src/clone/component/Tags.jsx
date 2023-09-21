import React, { useContext } from "react";
import Tag from "./Tag";
import { TagContext } from "../context/TagContext";


const Tags = () => {
  const {tags} = useContext(TagContext);
  const tagList = tags.map((tag, i) => <Tag key={i} tag={tag}/>)

  return (
    <>
      <ul draggable="true">
        {tagList}
      </ul>
    </>
  );
};

export default Tags;
