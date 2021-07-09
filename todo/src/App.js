import React, { useReducer, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';


function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}
function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter(todo => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map(todo =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );
    default:
      return todos;
  }
}
const App = () => {
  // 원래 2번째 파라미터에 초기 상태를 넣어줘야 하지만,
  // 2번째에 undefined, 3번째에 초기 상태를 넣어줘 
  // 컴포넌트가 맨 처음 렌더링 될 시에만 createBulkTodos 호출
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);
  // 다음 id값을 저장
  const nextId = useRef(2501);

  // id값이 같을 때, checked 상태를 바꿈
  const onToggle = useCallback(
    id => {
      dispatch({ type: 'TOGGLE', id });
    },
    [],
  );

  // todo.id !== id를 만족하는(클릭한 요소의 id와 일치하지 않는) 요소들을 모아 새로운 배열을 만듦
  const onRemove = useCallback(
    id => {
      // 어떻게 업데이트 할 지 정의해 주는 업데이트 함수 넣어서,
      // useCallback 할 때 두 번째 파라미터를 안넣을 수 있음.
      dispatch({ type: 'REMOVE', id });
    },
    [],
  );

  // onInsert에서  값이 들어오면 정리하고 다음 값 준비
  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      dispatch({ type: 'INSERT', todo });
      nextId.current += 1; // nextId 1 씩 더하기
    },
    [],
  );
  return <TodoTemplate>
    <TodoInsert onInsert={onInsert} />
    <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
  </TodoTemplate>
}
export default App;