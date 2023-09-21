import React from 'react';
import GuestComponent from './GuestComponent';

const Study = () => {
  const name = undefined || "임희수"
  const member = false;
  const guest = true;
  return (
    <div>
      <div>
        <h1>안녕하세요 WeWork 입니다</h1>
        {/* 수정필요 */}
        {member && guest && (<GuestComponent guest={guest}/>)}
        {member ? (
          <div>
            <h3>{name}님 맘껏 이용 하시면 됩니다</h3>
          </div>
        ):(
          <div>
            <h3>30분만 있다가 나가세요</h3>
          </div>
        )}
        {guest &&(<GuestComponent guest={guest}/>)}
      </div>
    </div>
  );
};

export default Study;

{/* <div>
      <div>
        <h1>안녕하세요 WeWork 입니다</h1>
        {member && guest && (
          <div>
            <h2>30분만 있다가 나가세요</h2>
          </div>
        )}
        {member ? (
          <div>
            <h3>{name}님은 맘껏 이용 하시면 됩니다</h3>
          </div>
        ):(
          <div>
            <h3>멤버 맞으세요?</h3>
          </div>
        )}
      </div>
    </div> */}