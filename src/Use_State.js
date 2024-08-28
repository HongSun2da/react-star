import { useState } from 'react';

function Use_State() {
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
  
  console.log('App 업데이트!')

  return (
    <div>
      <h2>1. useState 사용법</h2>
     
      <span>현재 시간: {time}시</span>
      <button onClick={handleClick}>Update</button>
    </div>
  );
}

export default Use_State;
