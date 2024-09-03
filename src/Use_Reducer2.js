import { useReducer, useState } from 'react';
import Student from './component/Student';

const reducer = (state, action) => {
  switch(action.type) {
    case 'add-student':
      const name = action.payload.name;
      const newStudent = {
        id: Date.now(),
        name: name,
        isHere: false,        
      }
      return {
        count: state.count + 1,
        students: [...state.students, newStudent],
      }
    case 'delete-student':
      return {
        count: state.count - 1,
        students: state.students.filter((student) => student.id !== action.payload.id),
      }
    case 'mark-student':
      return {
        count: state.count,
        students: state.students.map(student => {
          if(student.id === action.payload.id) {
            return {...student, isHere: !student.isHere};
          }
          return student;
        }),
      }
    default:
      return state;
  }

};
const initialState = {
  count: 0,
  students: [],
};

function Use_Reducer2() {
  console.log('Use_Reducer2 시작 ============');
  const [name, setName] = useState('');
  const [studentsInfo, dispatch] = useReducer(reducer, initialState);

  console.log('Use_Reducer2 종료 ============');
  return (
    <div>
      <h2>13. Use_Reducer - 출석부</h2>
      <hr />
      <p>총 학생 수: {studentsInfo.count}</p>
      <input type='text' placeholder='이름을 입력해주세요.' value={name} onChange={(e) => setName(e.target.value)}></input>
      <button onClick={() => {
        dispatch({type: 'add-student', payload: {name}})
      }}>추가</button>

      {studentsInfo.students.map((student) => {
        return <Student key={student.id} name={student.name} dispatch={dispatch} id={student.id} isHere={student.isHere}></Student>        
      })}
    </div>
  );
}

export default Use_Reducer2;
