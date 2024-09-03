import { useInput } from './userhook/useInput';

function displayMessage(message){
  alert(message);
}

function User_Hook() {
  console.log('User_Hook 시작 ============');
  const [inputValue, handleChange, handleSubmit] = useInput('안녕', displayMessage);
  const [inputValue2, handleChange2, handleSubmit2] = useInput('안녕.. 안녕...', displayMessage);

  console.log('User_Hook 종료 ============');
  return (
    <div>
      <h2>14. Custom Hooks - useInput</h2>
      <hr />
      <div style={{border: '2px solid gray', padding: '10px'}}>
        <div>useInput</div>
        <input value={inputValue} onChange={handleChange}></input>
        <button onClick={handleSubmit} >확인</button>
        <br />
        <input value={inputValue2} onChange={handleChange2}></input>
        <button onClick={handleSubmit2} >확인2</button>
      </div>
    </div>
  );
}

export default User_Hook;
