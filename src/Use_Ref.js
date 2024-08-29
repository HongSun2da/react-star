import { useState, useRef } from 'react';

function Use_Ref() {
  console.log('Use_Ref 시작 ============');
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
    
  const incresaseCountState = () => {
      setCount(count + 1);
  };

  const incresaseCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log("Ref: " + countRef.current );
};

  console.log('Use_Ref 종료 ============');
  return (
    <div>
      <h2>5. Use_Ref - 저장공간</h2>
     
      <div>State: {count}</div>
      <div>Ref: {countRef.current}</div>
      <button onClick={incresaseCountState}>State 올려</button>
      <button onClick={incresaseCountRef}>Ref 올려</button>
    </div>
  );
}

export default Use_Ref;
