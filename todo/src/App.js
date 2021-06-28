import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    // useState 사용. 초기화
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 해보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]);
  // 다음 id값을 저장
  const nextId = useRef(4);

  // id값이 같을 때, checked 상태를 바꿈
  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo =>
          // ...todo 부분이 없으면 text포함해 다 날라감
          // 굳이 todo.id===id 부분을 넣는 이유는 onRemove시 id가 날라가기 때문
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  // todo.id !== id를 만족하는(클릭한 요소의 id와 일치하지 않는) 요소들을 모아 새로운 배열을 만듦
  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos],
  );

  // onInsert에서  값이 들어오면 정리하고 다음 값 준비
  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1; // nextId 1 씩 더하기
    },
    [todos],
  );
  return <TodoTemplate>
    <TodoInsert onInsert={onInsert} />
    <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
  </TodoTemplate>
}
export default App;