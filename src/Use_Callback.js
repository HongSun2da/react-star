import { useCallback, useEffect, useMemo, useState } from 'react';

function Use_Callback() {
  console.log('Use_Callback 시작 ============');
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(true);

  console.log('Use_Callback.State(number): ', number);
  console.log('Use_Callback.State(toggle): ', toggle);

  // 랜더링시 someFunction는 새로운 주소로 재설정함
  // const someFunction = () => {
  //   console.log(`Use_Callback.someFunction: number:${number}`);
  //   return;
  // };

  // someFunction 함수 메모이제이션
  // number 변경할때 someFunction 재설정 함
  const someFunction = useCallback(() => {
    console.log('Use_Callback.useCallback(number): 함수변경 ', number);
    return;
  }, [number]);

  useEffect(() => {
    console.log('Use_Callback.useEffect(someFunction): ', someFunction);
  }, [someFunction]);

  console.log('Use_Callback 종료 ============');
  return (
    <div>
      <h2>10. UseCallback - 메모이제이션(함수)</h2>
      <hr />
      <div style={{border: '2px solid gray', padding: '10px'}}>
        <input type='number' value={number} onChange={(e) => setNumber(e.target.value)}></input>
        <button onClick={() => setToggle(!toggle) }>{toggle.toString()}</button>
        <br />
        <button onClick={someFunction}>Call someFunc</button>
      </div>
    </div>
  );
}

export default Use_Callback;
