import { useEffect, useState } from 'react';
import Timer from './component/Timer';

function Use_Effect2() {
  console.log('Use_Effect2 시작 ============');
  const [showTimer, setShowTimer] = useState(false);

  
  console.log('Use_Effect2 종료 ============');
  return (
    <div>
      <h2>4. Use_Effect2 - useEffect 정리하기</h2>
      <hr />
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
    </div>
  );
}

export default Use_Effect2;
