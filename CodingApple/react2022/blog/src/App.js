import './App.css';
import { useState } from 'react';

function App() {

  // post 라는 변수
  let post = '강남 우동 맛집';
  let [a,b] = useState('남자 코트 추천');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>
      <div className="list">
        <h4>{ a }</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
