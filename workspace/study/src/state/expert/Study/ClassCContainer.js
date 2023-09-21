import React, { useRef, useState } from 'react';

const ClassCContainer = () => {
  const style = {listStyle:"none"};

  const [students, setStudents] = useState([]);
  const [checked, setChecked] = useState([]);
  const inputRef = useRef([]);
  
  const onClickAdd = () => {
    setChecked(checked.concat(false));
    setStudents(
      students.concat({
        name: inputRef.current[0].value,
        nickname: inputRef.current[1].value,
      }
     ));
    inputRef.current[0].value ="";
    inputRef.current[1].value ="";
  };

  // const onClickToDelete = () => {
  //   setStudents(students.filter((student, i) => !checked[i]));
  //   setChecked(new Array(students.length).fill(false));
  // };

  const onChangeCheckbox = (i) => {
    // splice(a, b, c): a에서 b개 c로 변경
    checked.splice(i, 1, !checked[i]);
    // setChecked([...checked]);
    setChecked(checked.concat());
  };


  return (
    <div>
      <div>
        <ul>
        {students.map((student, i) => (<li>
          <input
            type="checkbox"
            checked={checked[i]}
            onChangeCheckbox={() => {
            onChangeCheckbox(i);
            }}
          />
          {student.name}({student.nickname})
        </li>))}
        </ul>
        <input
         placeholder='학생 이름'
         ref={(element) => (inputRef.current[0] = element)}
        />
        <input
         placeholder='학생 별명'
         ref={(element) => (inputRef.current[1] = element)}/>
      </div>
      <div>
        <button onClick={onClickAdd}>입실</button>
        <button>퇴실</button>
      </div>
      {/* {`${name} (${nickname})`} */}
    </div>
  );
};

export default ClassCContainer;