import { useEffect, useState } from 'react';

function Use_Effect() {
  console.log('Use_Effect 시작 ============');
  const [count, setCount] = useState(1);
  const [name, setName] = useState('');

  const handleCountUpdate = () => {
    setCount(count + 1);
  };
  console.log("useEffect.State(count): ", count);

  const handleInputChange = (e) => {
    setName(e.target.value);
  };
  console.log("useEffect.State(name): ", name);

  // 최소 한번 랜더링
  useEffect(() => {
    console.log("useEffect '[]' Mount");
    // Clean Up 작업
    return () => {
      console.log("useEffect '[]' Unmount");
    };
  }, []);

  // 매번 랜더링
  useEffect(() => {
    console.log("useEffect '' Mount");
    // Clean Up 작업
    return () => {
      console.log("useEffect '' Unmount");
    };
  });

  // [count] 변경시 랜더링
  useEffect(() => {
    console.log("useEffect '[count]' Mount");
    // Clean Up 작업
    return () => {
      console.log("useEffect '[count]' Unmount");
    };
  }, [count]);

  // [name] 변경시 랜더링
  useEffect(() => {
    console.log("useEffect '[name]' Mount");
    // Clean Up 작업
    return () => {
      console.log("useEffect '[name]' Unmount");
    };
  }, [name]);
  
  console.log('Use_Effect 종료 ============');
  return (
    <div>
      <h2>3. Use_Effect - 최초, 매번, State 변경시</h2>
      <hr />
      <div style={{border: '2px solid gray', padding: '10px'}}>
        <button onClick={handleCountUpdate}>Update</button>      
        <span>count: {count}</span>
        <br/>
        <input type='text' value={name} onChange={handleInputChange}></input>
        <span>name: {name}</span>
      </div>
    </div>
  );
}

export default Use_Effect;
