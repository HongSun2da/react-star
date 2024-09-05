import React, { useEffect, useRef, useState } from 'react';
import { useDebounce } from './userhook/debounce';



function fetchDataFromServer(value){
  if(!value) {return [];}

  console.log("서버로 데이터 호출... GetData....");
  const users = [
    { name: "김철수", age: "16" },
    { name: "이영희", age: "26" },
    { name: "김민수", age: "15" },
    { name: "홍길동", age: "20" },
    { name: "홍민영", age: "45" },
    { name: "김민영", age: "32" },
  ];
  return users.filter((user) => user.name.startsWith(value));
}


function Debounce() {
  console.log('Debounce 시작 ============');
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);

  // const [debounceInput, setDebounceInput] = useState(input);
  // Coustmer Hook 사용
  const debounceInput = useDebounce(input, 500)
  
  // console.log("Debounce.input: ", input, " result: ", result);

/* Coustmer Hook 사용함

  // 연속 이벤트중 마지막 이벤트 후에 실행 하기
  useEffect(() => {
    // setTimeout 결과값 취소를 위한 변겨저장
    const timerID = setTimeout(() => {
      console.log("Debounce.setTimeout 마지막 호출");
      setDebounceInput(input);
    }, 1000);
    
    // setTimeout 취소처리하고 마지막 이벤트는 실행함
    return () => {
      clearTimeout(timerID);
    };
  }, [input]);

*/

  // useEffect(() => {
  //   const users = fetchDataFromServer(input);
  //   setResult(users);
  // }, [input]);

  useEffect(() => {
    const users = fetchDataFromServer(debounceInput);
    setResult(users);
  }, [debounceInput]);



  console.log('Debounce 종료 ============');
  return (
    <div>
      <h2>18. Debounce - 연속서버호출 줄이는법 </h2>
      <hr />
      <div style={{border: '2px solid gray', padding: '10px'}}>
        <div>
          <input placeholder='검색하세요.' value={input} onChange={(e) => setInput(e.target.value)}></input>
          <ul>
            {result.map((user) => (
              <li key={user.name}>
                <span>{user.name}</span>
                <span>{user.age}세</span>
              </li>
            ))}
          </ul>
        </div>   
      </div>
    </div>
  );
}

export default Debounce;
