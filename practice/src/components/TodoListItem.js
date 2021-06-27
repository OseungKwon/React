import React from 'react';
import { MdRadioButtonChecked, MdRadioButtonUnchecked, MdDoNotDisturbOn } from 'react-icons/md';
import './TodoListItem.scss';

const TodoListItem = ({ todo, onToggle, onRemove }) => {
    return (
        <div className="TodoListItem">
            <div className={`checkBox ${todo.checked && 'checked'}`} onClick={() => onToggle(todo.id)}>
                {
                    todo.checked ? < MdRadioButtonChecked /> : <MdRadioButtonUnchecked />
                }
                <div className="text">{todo.text}</div>
            </div>
            <div className="remove" onClick={() => onRemove(todo.id)}>
                <MdDoNotDisturbOn color="#ff8989" visibility="hidden" />
            </div>
        </div>
    )
}
export default TodoListItem;