import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [lists, setLists] = useState([
    {
      id: 1,
      text: 'naver',
      checked: false,
    },
    {
      id: 2,
      text: 'google',
      checked: true,
    },
    {
      id: 3,
      text: 'daum',
      checked: true,
    },
  ]);
  const nextId = useRef(4);
  const onInsert = useCallback(text => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setLists(lists.concat(todo));
    // current로 ref 접근
    nextId.current += 1;
  }, [lists],
  );

  const onToggle = useCallback(id => {
    setLists(
      lists.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  }, [lists]);

  const onRemove = useCallback(id => {
    setLists(lists.filter(todo => todo.id !== id));
  }, [lists]);
  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList lists={lists} onToggle={onToggle} onRemove={onRemove} />
      </TodoTemplate>
    </div>
  )
}
export default App;
// TodoTemplate
// TodoInsert
// TodoList
// TodoListItem