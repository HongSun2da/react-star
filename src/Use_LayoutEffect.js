import { useEffect, useLayoutEffect, useState } from 'react';

function Use_LayoutEffect() {
  console.log('Use_LayoutEffect 시작 ============');
  const [count, setCount] = useState(0);
  
  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  // 비동기 실행
  useEffect(() => {
    console.log("Use_LayoutEffect.useEffect 'count 변경시' 랜더링", count);
  }, [count]);


  // 동기적 실행
  useLayoutEffect(() => {
    console.log("Use_LayoutEffect.UseLayoutEffect '최초' 랜더링");
  }, []);

  useLayoutEffect(() => {
    console.log("Use_LayoutEffect.UseLayoutEffect '매번' 랜더링");
  });
 
  useLayoutEffect(() => {
    console.log("Use_LayoutEffect.useLayoutEffect 'count 변경시' 랜더링", count);
  }, [count]);

 
  console.log('Use_LayoutEffect 종료 ============');
  return (
    <div>
      <h2>17. Use_LayoutEffect - effect실행 후 화면 업데이트</h2>
      <hr />
      <div style={{border: '2px solid gray', padding: '10px'}}>
        <button onClick={handleCountUpdate}>Update</button>      
        <span>count: {count}</span>
      </div>
  </div>
  );
}

export default Use_LayoutEffect;
