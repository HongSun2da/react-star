import Reack, { useState, useEffect } from "react";

function Box({createBoxStyle}) {
    console.log('Box 시작 ============');
    const [style, setStyle] = useState({});
    
    console.log('Box.State(style): ', style);

    useEffect(() => {
        console.log('Box.useEffect(createBoxStyle): 그리기', createBoxStyle);
        setStyle(createBoxStyle());
    }, [createBoxStyle]);

    console.log('Box 종료 ============');
    return (
        <div style={style}></div>
    );
  }
  
  export default Box;
  