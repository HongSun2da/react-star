import { useCallback, useState } from 'react';

import Box from './component/Box';

function Use_Callback2() {
  console.log('Use_Callback2 시작 ============');
  const [size, setSize] = useState(80);
  const [isDark, setIsDark] = useState(false);

  console.log('Use_Callback2.State(size): ', size);
  console.log('Use_Callback2.State(isDark): ', isDark);

  // 박스크기 변경 리랜더링함
  // const createBoxStyle = () => {
  //   return {
  //     backgroundColor: 'pink',
  //     width: `${size}px`,
  //     height: `${size}px`,
  //   };
  // };

  const createBoxStyle = useCallback( () => {
    return {
      backgroundColor: 'pink',
      width: `${size}px`,
      height: `${size}px`,
    };
  }, [size]);

  console.log('Use_Callback2 종료 ============');
  return (
    <div style={{
      background: isDark ? 'black' : 'white',
      }}
    >
      <h2>11. UseCallback - 실전예제</h2>
      <hr />
      <div style={{border: '2px solid gray', padding: '10px'}}>
        <input type='number' value={size} onChange={(e) => setSize(e.target.value)}></input>
        <button onClick={() => setIsDark(!isDark)}>Change Theme</button>
        <Box createBoxStyle={createBoxStyle}></Box>
      </div>
    </div>
  );
}

export default Use_Callback2;
