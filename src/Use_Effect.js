import { useEffect, useState } from 'react';

function Use_Effect() {
  console.log('Use_Effect 시작 ============');
  const [count, setCount] = useState(1);
  const [name, setName] = useState('');

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  // useEffect은 화면 랜더링 이후에 발생 함
  useEffect(() => {
    console.log("useEffect '최초' 랜더링");
  }, []);

  useEffect(() => {
    console.log("useEffect '매번' 랜더링");
  });

  useEffect(() => {
    console.log("useEffect 'count 변경시' 랜더링");
  }, [count]);

  useEffect(() => {
    console.log("useEffect 'name 변경시' 랜더링");
  }, [name]);
  
  console.log('Use_Effect 종료 ============');
  return (
    <div>
      <h2>3. Use_Effect - 최초, 매번, 변경시</h2>
      <hr />
      <button onClick={handleCountUpdate}>Update</button>      
      <span>count: {count}</span>
      <br/>
      <input type='text' value={name} onChange={handleInputChange}></input>
      <span>name: {name}</span>
    </div>
  );
}

export default Use_Effect;
