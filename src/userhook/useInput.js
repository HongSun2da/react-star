import { useState } from "react";

export function useInput(initval, submitAction) {
    console.log('User_Hook.useInput 시작 ============');
    const [inputValue, setInputValue] = useState(initval);
    
    console.log('User_Hook.useInput ', 'initval: ', initval);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = () => {
        setInputValue('');
        submitAction(inputValue);
    };
    console.log('User_Hook.useInput 종료 ============');
    return [inputValue, handleChange, handleSubmit];
}