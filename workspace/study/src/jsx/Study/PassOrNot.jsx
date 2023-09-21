import React, { useState } from 'react';

const PassOrNot = () => {
  const [name, setName] = useState("");
  const [isInput, setIsInput] = useState(false); // 입력 후에 실행 시키기 위해 기본값 false
  const [enteredNames, setEnteredNames] = useState([]); // 입력된 이름을 저장하는 배열
  const style = { fontSize: "20px", textAlign: "center", marginTop: "100px" };
  const allowedNames = ["장동혁","임희수","임수현","임웅빈","조현상","허은상","김보령","오주연","김혜빈","이서호","주현진","한동석"]

  const onNameChange = (e) => {
    setName(e.target.value);
    setIsInput(false); // 입력 후에 다시 false로 
  };

  const onFormSubmit = (e) => {
    e.preventDefault(); // 폼 이벤트 기본 *동작 막음*
    setIsInput(true); // true 일때 실행 된다(버튼 눌렀을때)

    // 입력된 이름이 "입장 가능"한 이름인 경우에만 리스트에 추가
    if (allowedNames.includes(name)) {
      setEnteredNames([...enteredNames, name]);
    }

    setName(""); // 실행 된 후 입력창을 비워준다
  };

  const pass = "입장 가능";
  const reject = "입장 불가능";

  
  return (
    <div style={style}>
      <h3>C 강의장</h3>
      <form onSubmit={onFormSubmit}>
        <input value={name} onChange={onNameChange} />
        <button type="submit">확인</button>
      </form>
      {isInput && (
        <>
          {allowedNames.includes(name) ? (
            <>
              <h2>{pass}</h2>
              <div>
                <h2>{name}님 힘내세용🥰</h2>
              </div>
            </>
          ) : (
            name !== "" && (
              <>
                <h2>{reject}</h2>
                <div>
                  <h2>{name}님은 못들어와용😜</h2>
                </div>
              </>
            )
          )}
        </>
      )}

      {isInput && (
        <>
          <h3>입실 목록</h3>
          <ul>
            {name.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default PassOrNot;
