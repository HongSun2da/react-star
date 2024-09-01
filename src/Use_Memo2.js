import { useEffect, useMemo, useState } from 'react';

function Use_Memo2() {
  console.log('Use_Memo2 시작 ============');
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  // 전달인자가 원시(Primitive)타입(String, Number, Boolean, Null, undefined, BigInt, Symbol)
  // const location = isKorea ? '한국' : '외국';    
  
  // 전달인자가 객체(Object)타입(주소전달) - location 새로운 주소 할당으로 => 리랜더링함
  // const location = {
  //   country : isKorea ? '한국' : '외국'
  // };                                                

  // useMemo 사용 - isKorea 저장
  const location = useMemo(() => {
    return {
      country : isKorea ? '한국' : '외국'
    };
  }, [isKorea]);


  useEffect(() => {
    console.log('Use_Memo2.useEffect 호출...');
  }, [location]);

  console.log('Use_Memo2 종료 ============');
  return (
    <div>
      <h2>11. useMemo - useEffect와 비교(Oject 전달시)</h2>
      <hr />

      <div>하루에 몇끼 먹어요?</div>
      <input type='number' value={number} onChange={(e) => setNumber(e.target.value)}></input>
      
      <div>어느 나라에 있어요??</div>
      <p>나라: {location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>비행기 타기</button>
    </div>
  );
}

export default Use_Memo2;
