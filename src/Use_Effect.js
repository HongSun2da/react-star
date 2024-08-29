import { useState } from 'react';

function Use_Effect() {
  console.log('Use_Effect 시작 ============');
  const [count, setCount] = useState(1);

  
  console.log('Use_Effect 종료 ============');
  return (
    <div>
      <h2>3. Use_Effect - xxxxxxxx</h2>

      <button>Update</button>      
      <span>count: </span>
    </div>
  );
}

export default Use_Effect;
