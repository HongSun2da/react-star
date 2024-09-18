import { useState } from 'react';

const heavyWork = () => {
  console.log("Use_State2.heavyWork : 엄청 무거운 작업중..... 진행중 ...... 종료중...");
  return ['홍길도', '김민수'];
};

function Use_State2() {
  console.log('Use_State2 시작 ============');
  //const [names, setNames] = useState(heavyWork());  // 화면 게속 작업
  //const [names, setNames] = useState(heavyWork);    // 초기 화면 한번만 작업
  // Callback function 형식
  const [names, setNames] = useState(() => {
    return heavyWork();
  });

  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  console.log("Use_State2.State(input): " + input);

  const handleUpload = () => {
    setNames((preState) => {
      console.log("Use_State2.State(preState): " + preState);
      return [input, ...preState];
    });
  };

  console.log('Use_State2.State(namms): ', names);
  console.log('Use_State2 종료 ============');
  return (
    <div>
      <h2>2. useState - name List</h2>
      <hr />
      <div style={{border: '2px solid gray', padding: '10px'}}>
        <input type="text" value={input} onChange={handleInputChange}></input>
        <button onClick={handleUpload}>Upload</button>
        {names.map((name, idx) => {
          return <div key={idx}> - {name}</div>
        })}
      </div>
    </div>
  );
}

export default Use_State2;
