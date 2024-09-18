import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function Page() {
  console.log('Page 시작 ============');
  // const data = useContext(ThemeContext);
  // console.log(data);

  console.log('Page 종료 ============');
  return (
    <div>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default Page;
