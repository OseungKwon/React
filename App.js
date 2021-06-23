import React, { Component } from 'react';
import IterationSample from './IterationSample';

class App extends Component {
  render() {
    return (
      <IterationSample />
    );
  }

}
export default App;
/*
class형 컴포넌트에서,
컴포넌트 내부에서 DOM에 직접 접근해야 하는 경우 'ref'사용.
*/