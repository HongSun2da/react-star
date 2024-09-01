import { useMemo, useState } from 'react';

const hardCalculate = (number) => {
  console.log("어려운 계산중.... 계산중... 종류중.... 종료");
  for(let i=0; i < 999999999; i++) {}
  return number + 10000;
};

const easyCalculate = (number) => {
  console.log("쉬운 계산중...종료");
  return number + 1;
};

function Use_Memo() {
  console.log('Use_Memo 시작 ============');
  const [hardNumber, setHardNumber] = useState(1);  
  const [easyNumber, setEasyNumber] = useState(1);

  // const hardSum = hardCalculate(hardNumber); // hardNumber 변경시 재 랜더링해서 호출함
  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber);
  }, [hardNumber]);                             // hardNumber 변경시만 실행
  const easySum = easyCalculate(easyNumber);
    
  console.log('Use_Memo 종료 ============');
  return (
    <div>
      <h2>10. useMemo - 메모이제이션(변수)</h2>
      <hr />

      <div>어려운 계산기</div>
      <input type='number' value={hardNumber} onChange={(e) => setHardNumber(parseInt(e.target.value))}></input>
      <span>+ 10000 = {hardSum}</span>

      <div>쉬운 계산기</div>
      <input type='number' value={easyNumber} onChange={(e) => setEasyNumber(parseInt(e.target.value))}></input>
      <span>+ 1 = {easySum}</span>
    </div>
  );
}

export default Use_Memo;
