import React, { Component } from 'react';
class ScrollBox extends Component {
    scrollToBottom = () => {
        const { scrollHeight, clientHeight } = this.box; // 비구조화 할당 사용
        this.box.scrollTop = scrollHeight - clientHeight; //  (스크롤이 있는 박스의 div 높이 , 스크롤이 있는 박스 높이)
    }
    render() {
        const style = {
            border: '1px solid black',
            height: '300px',
            width: '300px',
            overflow: 'auto',
            position: 'relative'
        }
        const innerStyle = {
            width: '100%',
            height: '650px',
            background: 'linear-gradient(white, black)'
        }
        return ( // ref는 어떤 일이 일어나게 할 때 사용될 수 있음-> 남용 x, 스크롤 박스 조작, 캔버스, 특정 input에 포커스 등의 경우만 사용
            <div
                style={style}
                ref={(ref) => { this.box = ref }}>
                <div style={innerStyle} />
            </div>
        )
    }
}
export default ScrollBox;