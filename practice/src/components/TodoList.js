import React from 'react';
import './TodoList.scss';
import TodoListItem from './TodoListItem';
const TodoList = ({ lists, onToggle, onRemove }) => {
    return (
        <div className="TodoList">
            {lists.map(todo => (
                <TodoListItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onRemove={onRemove}
                />
            ))}
        </div>
    )
}
export default TodoList;