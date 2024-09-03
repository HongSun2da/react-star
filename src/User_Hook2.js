import { useFetch } from "./userhook/useFetch";

const baseUrl = 'https://jsonplaceholder.typicode.com';

function User_Hook2() {
  console.log('User_Hook2 시작 ============');
  const {data, fetchUrl} = useFetch(baseUrl, '');

  console.log('User_Hook2 종료 ============');
  return (
    <div>
      <h2>14. Custom Hooks - useFetch</h2>
      <hr />
      <div style={{border: '2px solid gray', padding: '10px'}}>
        <div>useFetch - ({baseUrl})</div>
        <button onClick={()=>fetchUrl('users')}>Get Users</button>
        <button onClick={()=>fetchUrl('posts')}>Get Posts</button>
        <button onClick={()=>fetchUrl('todos')}>Get Todos</button>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
}

export default User_Hook2;
