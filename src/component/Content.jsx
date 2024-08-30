import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { UserContext } from '../context/UserContext';

function Content() {
  console.log('Content 시작 ============');
    const {isDark} = useContext(ThemeContext);
    const username = useContext(UserContext);

  console.log('Content 종료 ============');

  return (
    <div className='content'
    style={{
        backgroundColor: isDark ? 'black': 'white',
        color: isDark ? 'white': 'black',
        height: 100,
    }}>
      <p>{username}, 좋은 하루 되세요.</p>
    </div>
  );
}

export default Content;
