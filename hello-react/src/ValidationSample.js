import React, { Component } from 'react';
import './ValidationSample.css';
class ValidationSample extends Component {
    state = { // js와 달리 React에서는 굳이 DOM에 접근하지 않아도, id대신 state를 사용하기에 더 쉬움.
        password: '',
        clicked: false,
        validated: false
    }
    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }
    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        });
        this.input.focus();
    }
    render() {
        return (
            <div>
                <input
                    ref={(ref) => this.input = ref}
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                />
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        )
    }
}
export default ValidationSample;