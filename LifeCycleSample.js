/*
마운트: DOM이 생성되고 웹 브라우저 상에 나타나는 것
업데이트: 컴포넌트 정보 업데이트
언마운트: 마운트의 반대 과정, 컴포넌트를 DOM에서 제거
*/
import React, { Component } from 'react';
class LifeCycleSample extends Component {
    state = {
        number: 0,
        color: null
    };
    myRef = null; // ref를 설정할 부분
    constructor(props) {
        super(props);
        console.log('constructor');
    }
    // props로 받아 온 값을 state에 동기화시키는 용도로 사용
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps');
        if (nextProps.color !== prevState.color) {
            return { color: nextProps.color };
        }
        return null;
    }
    // 컴포넌트를 만들고 첫 렌더링을 다 마친 후 실행. => 비동기 작업 처리
    componentDidMount() {
        console.log('componentDidMount');
    }

    // props, state를 변경했을 경우, 리렌더링을 시작할지 여부 지정
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        // 숫자의 마지막 자리가 4면 리렌더링하지 않습니다.
        return nextState.number % 10 !== 4;
    }

    // 컴포넌트에서 DOM 제거할 때 실행
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    // render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        if (prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }
        return null;
    }
    // 리렌더링을 완료한 후 실행(prev를 통해 컴포넌트가 이전에 가졌던 데이터에 접근 가능)
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState);
        if (snapshot) {
            console.log('업데이트되기 직전 색상: ', snapshot);
        }
    }
    // 컴포넌트 모양새를 정의
    render() {
        console.log('render');

        const style = {
            color: this.props.color
        };
        return (
            <div>
                { }
                <h1 style={style} ref={ref => (this.myRef = ref)}>
                    {this.state.number}
                </h1>
                <p>color: {this.state.color}</p>
                <button onClick={this.handleClick}>더하기</button>
            </div>
        );
    }

}
export default LifeCycleSample;