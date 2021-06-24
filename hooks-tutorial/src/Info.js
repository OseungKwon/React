//useEffect: 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook
import React, { useEffect, useState } from 'react';
const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    useEffect(() => {
        console.log('effect');
        return () => {
            console.log('unmount');
        };
    }, []); // 클래스형 컴포넌트에서 componentDidUpdate와 같은 작업
    const onChangeName = e => {
        setName(e.target.value);
    }
    const onChangeNickname = e => {
        setNickname(e.target.value);
    }
    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임:</b> {nickname}
                </div>
            </div>
        </div>
    )
}
export default Info;