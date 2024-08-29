import React, {useEffect} from "react";

const Timer = (props) => {
    console.log('Timer 시작 ============');
    useEffect(() => {
        const timer = setInterval(() => {
            console.log("타이머 돌아가는중....");
        }, 1000);
        
        // 컴포넌트 언마운트 할때 => setInterval 정리 작업
        return () => {
            clearInterval(timer);    
            console.log("타이머 종료되었습니다.");
        }
    }, []);

    console.log('Timer 종료 ============');
    return (
        <div>
            <span>타이머를 시작 합니다.</span>
        </div>
    );
};

export default Timer;