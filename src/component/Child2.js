import React, {memo} from "react";

const Child2 = ({name}) => {
    console.log('React_Memo2.Child2 시작 ============');

    console.log('React_Memo2.Child2 ', 'name: ', name);

    console.log('React_Memo2.Child2 시작 ============');
    return (
        <div style={{border: '2px solid blue', padding: '10px'}}>
            <div>자녀 Component</div>
            <div>성: {name.lastName}</div>
            <div>이름: {name.firstName}</div>
        </div>
    );
};

export default memo(Child2);