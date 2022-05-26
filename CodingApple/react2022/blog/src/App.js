/* eslint-disable */

import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, b] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [좋아요, 좋아요변경] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <div className="list">
        <h4>{ 글제목[0] } <span onClick={ ()=>{ 좋아요변경(좋아요+1) } }>👍🏼</span> {좋아요} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
