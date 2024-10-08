import { useState, useEffect, useRef } from 'react';

function Use_Ref4() {
  console.log('Use_Ref4 시작 ============');
  const inputRef = useRef();

  console.log("Use_Ref4.Ref(inputRef): ", inputRef);

  useEffect(() => {
    console.log("Use_Ref4.useEffect.Ref(inputRef): ", inputRef);
    inputRef.current.focus();
  }, []);

  const login = () => {
    alert(`환영합니다. ${inputRef.current.value}`);
    inputRef.current.focus();
  };

  console.log('Use_Ref4 종료 ============');
  return (
    <div>
      <h2>8. Use_Ref4 - DOM 요소접근</h2>
      <hr />
      <div style={{border: '2px solid gray', padding: '10px'}}>
        <input ref={inputRef} type='text' placeholder='username'></input>
        <button onClick={login}>로그인</button>
      </div>
    </div>
  );
}

export default Use_Ref4;
