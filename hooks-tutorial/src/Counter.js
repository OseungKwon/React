// useRender: useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트할 때 사용
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
    // state: 현재 가리키고 있는 상태
    // dispatch: 액션을 발생시키는 함수
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