import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { tagSelection } from "../module/Select";

const Tag = ({tag}) => {
  const dispatch = useDispatch();
  const selectedTag = useSelector((state) => state.selectedTag)

  const {content} = tag;
  return (
    <>
      <li className={selectedTag === content ? "active" : "noactive"}>
        <button type="button" onClick={() => {dispatch(tagSelection(content))}}>{content}</button>
      </li>
    </>
  );
};

export default Tag;
