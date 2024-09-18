import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { UserContext } from '../context/UserContext';

function Header() {
  console.log('Header 시작 ============');
  const {isDark} = useContext(ThemeContext);
  const username = useContext(UserContext);

  console.log("Header.Context(ThemeContext).isDark: ", isDark);
  console.log("Header.Context(UserContext).username: ", username);

  console.log('Header 종료 ============');
  return (
    <header className='header'
    style={{
        backgroundColor: isDark ? 'black': 'lightgray',
        color: isDark ? 'white': 'black',
    }}>
      <h4>Welcom {username}</h4>
    </header>
  );
}

export default Header;
