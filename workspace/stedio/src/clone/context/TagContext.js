import { createContext } from "react";

const TagContext = createContext({
  tags: []
});

const value = {
  tags: [{
    id: 1,
    content: '전체',
  },
  {
    id: 2,
    content: '웹툰 · 만화',
  },
  {
    id: 3,
    content: '글 · 저널리즘',
  },
  {
    id: 4,
    content: '영상 제작',
  },
  {
    id: 5,
    content: '일러스트',
  },
  {
    id: 6,
    content: '음악',
  },
  {
    id: 7,
    content: '예술',
  },
  {
    id: 8,
    content: '게임',
  },
  {
    id: 9,
    content: '제품 · 브랜드',
  },]
}

const TagProvider = ({children}) => {
  return (
    <TagContext.Provider value={value}>
      {children}
    </TagContext.Provider>
  );
}

export {TagContext, TagProvider};