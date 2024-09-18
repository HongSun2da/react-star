import { useState } from 'react';
import Page from './component/Page';
import { ThemeContext } from './context/ThemeContext';
import { UserContext } from './context/UserContext';

function Use_Context() {
  console.log('Use_Context 시작 ============');
  const [isDark, setIsDark] = useState(false);

  console.log("Use_Context.State(isDark): ", isDark);

  console.log('Use_Context 종료 ============');
  return (
    <div>
      <h2>9. useContext - 전역 공유공간</h2>
      <hr />
      <div style={{border: '2px solid gray', padding: '10px'}}>
        <UserContext.Provider value={"접속사용자"}>
          <ThemeContext.Provider value={{isDark, setIsDark}}>
            <Page></Page>
          </ThemeContext.Provider>
        </UserContext.Provider>
      </div>
    </div>
  );
}

export default Use_Context;
