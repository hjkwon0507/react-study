/* eslint-disable */

import './App.css';
import React, { useState } from 'react'

function App() {

  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState([0]);
  let [modal, modal변경] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);

  let [입력값, 입력값변경] = useState('');

  function 제목바꾸기() {
    var newArray = 글제목 // 글제목에 있던 0번째 데이터를 여자코트 추천으로 바꿈
    newArray[0] = '여자코트 추천'
    글제목변경(['여자 코트 추천', '강남 우동맛집', '파이썬독학'])
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={제목바꾸기}>버튼</button>

      {
        글제목.map(function(글, i){
          return (
            <div className="list" key={i}>
              <h3 onClick={ () => {누른제목변경(i)} }> { 글 }  <span onClick={ () => { 따봉변경(따봉 + 1) } }>👍🏻</span> {따봉} </h3>
              <p>2월 18일 발행</p>
              <hr/>
            </div>
          )
        })
      }

      <div className="publish">
        <input onChange={ (e)=>{ 입력값변경(e.target.value) } } />
        <button onClick={ ()=> {
          var arrayCopy = [...글제목];
          arrayCopy.unshift(입력값); // array 맨 앞에 자료 추가
          글제목변경(arrayCopy);
        } }>저장</button>
      </div>

      <button onClick={ () => {modal변경(!modal)} }>열고 닫기</button>

      <Profile />

      {
        modal === true
        ? <Modal 글제목={글제목} 누른제목={누른제목} />
        : null
      }
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>제목 { props.글제목[props.누른제목] } </h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

class Profile extends React.Component {
  constructor(){
    super();
    this.state = { name : 'Kim', age : 30 }
  }

  changeName = () => {
    this.setState( {name : 'Park'} )
  }


  render(){
    return (
      <div>
        <h3>프로필입니다.</h3>
        <p>저는 { this.state.name } 입니다.</p>
        <button onClick={ this.changeName }>버튼</button>
      </div>
    )
  }
}


export default App;
