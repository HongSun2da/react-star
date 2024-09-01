import Reack, { useState, useEffect } from "react";

function Box({createBoxStyle}) {
    console.log('Box 시작 ============');
    const [style, setStyle] = useState({});

    useEffect(() => {
        console.log('Box.useEffect... 박스 그리기');
        setStyle(createBoxStyle());
    }, [createBoxStyle]);
        
    console.log(style);
    console.log('Box 종료 ============');
    return (
        <div style={style}></div>
    );
  }
  
  export default Box;
  