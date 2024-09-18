import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Footer() {
  console.log('Footer 시작 ============');
  const {isDark, setIsDark} = useContext(ThemeContext);

  console.log("Footer.Context(ThemeContext).isDark: ", isDark);

  const toggleTheme = () => {
      setIsDark(!isDark);
  };
  console.log('Footer 종료 ============');
  return (
    <footer 
        className='footer'
        style={{
            backgroundColor: isDark ? 'black': 'lightgray',
        }}>

        <button className='button' onClick={toggleTheme}>Dark Mode</button>
    </footer>
  );
}

export default Footer;
