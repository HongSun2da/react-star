import { useState, useRef } from 'react';

function Use_Ref() {
  console.log('Use_Ref 시작 ============');
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  
  console.log("Use_Ref.Ref(countRef): ", countRef);
  
  const incresaseCountState = () => {
      setCount(count + 1);
  };
  // 랜더링
  console.log("Use_Ref.State(count): ", count);

  const incresaseCountRef = () => {
    countRef.current = countRef.current + 1;
    // 랜더링 없이 값만 Up
    console.log("Use_Ref.Ref(current++): ", countRef.current);
  };

  console.log('Use_Ref 종료 ============');
  return (
    <div>
      <h2>5. Use_Ref - 저장공간</h2>
      <hr />
      <div style={{border: '2px solid gray', padding: '10px'}}>
        <div>State: {count}</div>
        <div>Ref: {countRef.current}</div>
        <button onClick={incresaseCountState}>State 올려</button>
        <button onClick={incresaseCountRef}>Ref 올려</button>
      </div>
    </div>
  );
}

export default Use_Ref;
