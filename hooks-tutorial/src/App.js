import React, { useState } from 'react';
import Info from './Info';
const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}>
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
      {visible && <Info />/* visible이 true이면, <Info/>가 실행된다.*/}
    </div>
  );
};
export default App;