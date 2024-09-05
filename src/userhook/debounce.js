import React, { useEffect, useState } from 'react';

export function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);

    // 연속 이벤트중 마지막 이벤트 후에 실행 하기
    useEffect(() => {
        // setTimeout 결과값 취소를 위한 변겨저장
        const timerID = setTimeout(() => {
        console.log("useDebounce.setTimeout 마지막 호출");
        setDebounceValue(value);
        }, delay);
        
        // setTimeout 취소처리하고 마지막 이벤트는 실행함
        return () => {
            clearTimeout(timerID);
        };
    }, [value, delay]);
    
    return debounceValue;
}