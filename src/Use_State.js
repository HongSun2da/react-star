import { useState } from 'react';

function Use_State() {
  console.log('Use_State 시작 ============');
  const [time, setTime] = useState(1);

  const handleClick = () => {
    let newTime;
    if(time >= 12){
      newTime = 1;
    } else {
      newTime = time + 1;
    }
    setTime(newTime);
  }

  console.log('Use_State.time: ', time);
  console.log('Use_State 종료 ============');
  return (
    <div>
      <h2>1. useState - 시간증가</h2>
      <hr />
      <div style={{border: '2px solid gray', padding: '10px'}}>
        <span>현재 시간: {time}시</span>
        <button onClick={handleClick}>Update</button>
      </div>
    </div>
  );
}

export default Use_State;
