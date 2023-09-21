import React, { useContext, useRef } from 'react';
import { AnimalContext, AnimalProvider } from './AnimalContext';
import Animals from './Animals';
import { useInput } from './useInput';

// Context에 저장된 동물 세 마리를 버튼으로 출력
// input에 동물 입력 후 엔터: 동물 버튼 추가
// 동물 버튼 클릭 시 : 삭제
// 각 Context에 선언된 insert()와 delete() action 사용!

const AnimalContainer = () => {
  // useContext(Context);
  // Consumer로 감싸지 않고 바로 사용가능한 Hook 함수
  const {action} = useContext(AnimalContext);
  const styleFlex = {display: 'flex'};
  const styleList = {listStyle: 'none'}
  const [input, onChangeInput] = useInput("");
  const inputRef = useRef();
  const onKeyUpToAddAnimal = (e) => {
    if(e.key === 'Enter'){
      action.insert(input);
      inputRef.current.value = "";
    }
  }
  
  return (
    <div>
      <input ref={inputRef} onChange={onChangeInput} onKeyUp={onKeyUpToAddAnimal} />
      <Animals styleFlex={styleFlex} styleList={styleList}/>
    </div>
  );
};

export default AnimalContainer;