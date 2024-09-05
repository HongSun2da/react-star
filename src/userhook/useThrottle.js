import { useRef } from 'react';

export function useThrottle(callback, delay) {
    const lastRun = useRef(Date.now());   // 마지막 작동 시간

    return () => {
        // 현재시간 - 마지막 작동 시간
        const timeElapsed = Date.now() - lastRun.current;
        if(timeElapsed >= delay)
        {
            lastRun.current = Date.now();     // 마지막 작동 시간 재설정
            callback();
        }
    };
}