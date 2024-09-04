import React, { useEffect, useId, useRef } from "react";

function Use_Id() {
  console.log('Use_Id 시작 ============');
  


  console.log('Use_Id 종료 ============');
  return (
    <div>
      <h2>16. Use_Id - 기존사용접</h2>
      <hr />
      <div style={{border: '2px solid gray', padding: '10px'}}>
        <MyInput />
        <MyInput />
        <br />
        <MyInput2 />
        <MyInput2 />
        <br />
        <MyInput3 />
      </div>
    </div>
  );
}

function MyInput() {
  const id = useId();
  const ref = useRef();

  useEffect(() => {
    //const element = document.querySelector('#btn');   // javascript 접근 방법
    //const element = document.querySelector(id);       // 오류발생

    const element = ref.current;
    console.log(element);
  }, []);

  return (
    <div>
      <label htmlFor={id}>이름</label>
      <input id={id} ref={ref}></input>
    </div>
  );
}

function MyInput2() {
  const id = useId();
  return (
    <div>
      <label htmlFor={`${id}-name`}>이름</label>
      <input id={`${id}-name`}></input>
      <br />
      <label htmlFor={`${id}-age`}>나이</label>
      <input id={`${id}-age`}></input>
    </div>
  );
}

function MyInput3() {
  const id = useId();
  return (
    <div>
      <label htmlFor={`${id}-name`}>이름</label>
      <input id={`${id}-name`}></input>
      <button id='btn'>버튼</button>
    </div>
  );
}
export default Use_Id;
