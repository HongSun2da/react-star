import { useReducer, useState } from 'react';

// reducer -- state를 업데이트 한는 역할(은행)
// dispatch -- state 업데이트를 위한 요구
// action -- 요구의 내용
const reducer = (state, action) => {
  console.log('Use_Reducer.reducer가 일을 합니다.', 'state: ', state, 'action: ',action);
  // return parseInt(state) + parseInt(action.payload);

  switch (action.type){
    case 'deposit':
      return parseInt(state) + parseInt(action.payload);
    case 'withdraw':
      return parseInt(state) - parseInt(action.payload);
    default:
      return parseInt(state);
  }

};

function Use_Reducer() {
  console.log('Use_Reducer 시작 ============');
  const [number, setNumber] = useState(0);
  const [meney, dispatch] = useReducer(reducer, 0);

  console.log('Use_Reducer 종료 ============');
  return (
    <div>
      <h2>12. Use_Reducer - Dispatch(Action) ---&gt; Reducer(State, Action)</h2>
      <hr />
      <div>useReducer 은행에 오신것을 환영 합니다.</div>
      <p>잔고: {meney}원</p>
      <input type='number' value={number} onChange={(e)=>setNumber(e.target.value)} step="1000"></input>
      <button onClick={() => {
        dispatch({type: 'deposit', payload: number}); // useReducer.dispatch 함수호출 -> reducer 실행
      }}>예금</button>
      <button onClick={() => {
        dispatch({type: 'withdraw', payload: number}); // useReducer.dispatch 함수호출 -> reducer 실행
      }}>출금</button>
    </div>
  );
}

export default Use_Reducer;
