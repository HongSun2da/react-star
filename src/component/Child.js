import React, {memo} from "react";

const Child = ({name, age}) => {
    console.log('React_Memo.Child 시작 ============');

    console.log('React_Memo.Child ', 'name: ', name, 'age: ', age);

    console.log('React_Memo.Child 시작 ============');
    return (
        <div style={{border: '2px solid blue', padding: '10px'}}>
            <div>자녀 Component</div>
            <div>name: {name}</div>
            <div>age: {age}</div>
        </div>
    );
};

export default memo(Child);