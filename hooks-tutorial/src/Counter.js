// useState: 가장 기본적인 Hook, 함수형 컴포넌트에서도 가변적인 상태를 지닐 수 있게 해준다.
import React, { useReducer } from 'react';

function reducer(state, action) { // action: 현재 상태, 업데이트를 위해 필요한 정보를 가지고 있음.
    switch (action.type) {
        case 'INCREMENT':
            return { value: state.value + 1 }
        case 'DECREMENT':
            return { value: state.value - 1 }
        default:
            return state;
    }
}


const Counter = () => {
    const [state, dispatch] = useReducer(reducer, { value: 0 });
    return (
        <div>
            <p>
                현재 카운터 값은 <b>{state.value}</b>입니다.
            </p>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
        </div>
    )
}
export default Counter;