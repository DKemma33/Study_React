import React, { useState } from 'react';
//보기버튼 누를시 span 태그 text 보임,숨기기 버튼은 숨김
const Change = () => {
  const [status, setStatus] = useState();
  const onShow = () => setStatus("inline")
  const onHide = () => setStatus("none")
  return (
    <div>
      <button onClick={onShow}>보기</button>
      <button onClick={onHide}>숨기기</button>
      <span style={{display:status}}>강사님~~😜</span>
    </div>
  );
};

export default Change;