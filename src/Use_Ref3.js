import { useState, useEffect, useRef } from 'react';

function Use_Ref3() {
  console.log('Use_Ref3 시작 ============');
  const [count, setCount] = useState(1);
  const [renderCount, setRenderCount] = useState(1);
  const renderCountRef = useRef(0);

  useEffect(() => {
    //console.log('랜더링!!!');
    //setRenderCount(renderCount + 1);    // 무한루프 발생 함

    renderCountRef.current = renderCountRef.current + 1;
    console.log('랜더링 수: ' + renderCountRef.current );

  });

  console.log('Use_Ref3 종료 ============');
  return (
    <div>
      <h2>7. Use_Ref3 - 무한루프 함정</h2>
      <hr />
      <div>Count: {count}</div>
      <button onClick={() => {setCount(count + 1)}}>올려</button>
    </div>
  );
}

export default Use_Ref3;
