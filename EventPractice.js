import React, { Component } from 'react';
class EventPractice extends Component {
    state = {
        message: '',
        username: ''
    }
    /*
    (constructor(props) {//함수 설정할때는 state말고 constructor 사용
        super(props);
        this.handleChange = this.handleChange.bind(this);//this를 컴포넌트 자신으로 제대로 가리키기 위해 메서드를 this와 바인딩
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(e){
        this.setState({
            message: e.target.value
        });
    }
    */
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleClick = (e) => {
        alert(this.state.username + ': ' + this.state.message);
        this.setState({
            message: '', username: ''
        });
    }
    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleClick();
        }
    }
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="사용자명"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보세요"
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}
export default EventPractice;