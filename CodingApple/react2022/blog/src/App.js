import './App.css';
import { useState } from 'react';

function App() {

  // post 라는 변수
  let post = '강남 우동 맛집';
  let [글제목, b] = useState('여자 코트 추천');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <div className="list">
        <h4>{ 글제목 }</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
