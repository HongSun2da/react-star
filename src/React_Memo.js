import { useState } from 'react';
import Child from './component/Child';

function React_Memo() {
  console.log('React_Memo 시작 ============');
  const [parentAge, setParentAge] = useState(0);
  const [childAge, setChildAge] = useState(0);

  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  };

  const incrementChildAge = () => {
    setChildAge(childAge + 1);
  };

  console.log('React_Memo 종료 ============');
  return (
    <div>
      <h2>13. React_Memo - 컴포넌트 최적화하기</h2>
      <hr />
      <div style={{border: '2px solid gray', padding: '10px'}}>
        <div>부모 Component</div>
        <div>age: {parentAge}</div>
        <button onClick={incrementParentAge}>부모 나이 증가</button>
        <button onClick={incrementChildAge}>자식 나이 증가</button>
        <Child name={'홍길도'} age={childAge}></Child>
        <Child name={'홍대길'} age={6}></Child>
      </div>
    </div>
  );
}

export default React_Memo;
