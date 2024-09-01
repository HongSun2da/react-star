import { useState, useRef } from 'react';

function Use_Ref2() {
  console.log('Use_Ref2 시작 ============');
  const [render, setRender] = useState(0);
  const countRef = useRef(0);   // 값 유지 됨
  let countVal = 0;             // 리랜더시 무조건 초기화 됨

  const doRendering = () => {
    setRender(render + 1);
  };

  const increaseRef = () => {
    countRef.current = countRef.current + 1;
    console.log("Ref: " + countRef.current );
  };

  const increaseVal = () => {
    countVal = countVal + 1;
    console.log("Val: " + countVal );
  };

  console.log('Use_Ref2 종료 ============');
  return (
    <div>
      <h2>6. Use_Ref2 - 저장공간 비교(변수)</h2>
      <hr />
      <div>Ref: {countRef.current}</div>
      <div>Val: {countVal}</div>
      <button onClick={increaseRef}>Ref 올려</button>
      <button onClick={increaseVal}>Val 올려</button>
      <button onClick={doRendering}>랜더!!</button>
    </div>
  );
}

export default Use_Ref2;
