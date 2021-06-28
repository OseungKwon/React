import React from 'react';
import './TodoTemplate.scss';

// TodoTemplate를 부르는 태그 안의 내용이 child에 삽입된다
const TodoTemplate = ({ children }) => {
    return (
        <div className="TodoTemplate">
            <div className="app-title">일정 관리</div>
            <div className="content">{children}</div>
        </div>
    )
}
export default TodoTemplate;