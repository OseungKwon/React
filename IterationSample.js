import React, { useState } from 'react';
const IterationSample = () => {
    const liStyle = {
        cursor: 'pointer'
    }
    const [names, setNames] = useState([
        { id: 1, text: '눈사람' },
        { id: 2, text: '얼음' },
        { id: 3, text: '눈' },
        { id: 4, text: '바람' },
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const onChange = e => setInputText(e.target.value);

    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        });
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    };

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            onClick();
        }
    };
    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    }

    const nameList = names.map(name => (
        <li key={name.id} onDoubleClick={() => onRemove(name.id)} style={liStyle}>
            {name.text}
        </li>
    ));
    return (

        <>
            <input value={inputText} onChange={onChange} onKeyPress={onKeyPress} />
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </>
    );
};
export default IterationSample;
/*
key: 컴포넌트 배열을 렌더링했을 때 어떤 원소에 변동이 있었는지 알아내려고 사용
map 함수를 통해 코드를 간략화 할 수 있으므로 애용할것!
*/