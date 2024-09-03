import { useEffect, useState } from "react";

export function useFetch(baseUrl, initType) {
    console.log('User_Hook2.useFetch 시작 ============');
    const [data, setDate] = useState(null);

    const fetchUrl = (type) => {
      fetch(baseUrl + '/' + type)
      .then((res) => res.json())
      .then((res) => setDate(res));
    };

    useEffect(() => {
        fetchUrl(initType);
    }, []);
    
    console.log('User_Hook2.useFetch 종료 ============');
    return {
        data,
        fetchUrl,
    };
}