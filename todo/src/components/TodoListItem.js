import React from 'react';
import {
    MdCheckBoxOutlineBlank, // 체크되지 않은 체크박스
    MdCheckBox, // 체크된 체크박스
    MdRemoveCircleOutline, // 제거할 때 사용하는 아이콘
} from 'react-icons/md';
// classnames는 리액트 라이브러리 중 하나로, 객체를 통째로 전달하는 것처럼
// 조건부로 classNames를 결합할 수 있는 자바스크립트의 유틸리티
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
    const { id, text, checked } = todo;

    // cn("checkbox", {checked})  -->  classnames 조건부 클래스 설정 
    // checked 가 false 일 경우 적용 x
    return (
        <div className="TodoListItem-virtualized" style={style}>
            < div className="TodoListItem" >
                <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
                    {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                    <div className="text">{text}</div>
                </div>
                <div className="remove" onClick={() => onRemove(id)}>
                    <MdRemoveCircleOutline />
                </div>
            </div >
        </div >
    );
};
// React.memo를 사용해 todo, onRemove, onToggle (props)
// 가 바뀌지 않으면 리렌더링 하지 않는다.
export default React.memo(TodoListItem);
