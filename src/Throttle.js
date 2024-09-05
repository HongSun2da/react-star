import React, { useEffect, useRef, useState } from 'react';
import { useThrottle } from './userhook/useThrottle';

function hackLottoNumbers() {
  console.log("로또번호 서버해서 힘들게 생성 하고 있습니다.......");
  const lottoNumbers = [];
  for(let i=0; i < 6; i++){
    const number = Math.floor(Math.random() * 45) + 1;
    lottoNumbers.push(number);
  }
  return lottoNumbers;
}

function Throttle() {
  console.log('Throttle 시작 ============');
  const [lottoNumbers, setLottoNumbers] = useState([0, 0, 0, 0, 0, 0]);

/* useThrottle 없이 구현 하기

  const lastRun = useRef(Date.now());   // 마지막 작동 시간

  const handleClick = () => {
    // 현재시간 - 마지막 작동 시간
    const timeElapsed = Date.now() - lastRun.current;

    if(timeElapsed >= 1000)
    {
      lastRun.current = Date.now();     // 마지막 작동 시간 재설정
      const result = hackLottoNumbers();
      setLottoNumbers(result);
    }
  };
*/

  // useThrottle 사용으로 구현
  const handleClick = useThrottle(() => {
    const result = hackLottoNumbers();
    setLottoNumbers(result);
  }, 1000);

  console.log('Throttle 종료 ============');
  return (
    <div>
      <h2>19. Throttle - 서버호출 딜래이 만들기 </h2>
      <hr />
      <div style={{border: '2px solid gray', padding: '10px'}}>
        <div>로또 번호 맞춰줄게</div>
        <button onClick={handleClick}>로또 번호생성</button>
        <div>
          {lottoNumbers.map((number, idx) => (
            <span key={idx} style={{padding: '5px'}}>
              {number}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Throttle;
