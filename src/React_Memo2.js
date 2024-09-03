import {useMemo, useState } from 'react';
import Child2 from './component/Child2';

function React_Memo2() {
  console.log('React_Memo2 시작 ============');
  const [parentAge, setParentAge] = useState(0);

  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  };

  // 메모리 주소 재설정됨
  // const name = {
  //   lastName: '홍', 
  //   firstName: '길동',
  // }

  // useMemo 사용으로 Object 상태 유지함
  const name = useMemo(() => {
    return {
        lastName: '홍', 
        firstName: '길동',
      }
  }, []);
  
  // useCallback 사용으로 Function 상태 유지가능함

  console.log('React_Memo2 종료 ============');
  return (
    <div>
      <h2>13. React_Memo - (ft. useMemo, useCallback)</h2>
      <hr />
      <div style={{border: '2px solid gray', padding: '10px'}}>
        <div>부모 Component</div>
        <div>age: {parentAge}</div>
        <button onClick={incrementParentAge}>부모 나이 증가</button>
        <Child2 name={name}></Child2>
      </div>
    </div>
  );
}

export default React_Memo2;
