import React, {useContext, useEffect, useState} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';
import {stockContext} from './App.js';
import { Nav } from 'react-bootstrap';
import { connect } from 'react-redux';

import { CSSTransition } from "react-transition-group";

let Box = styled.div`
  padding : 20px;
`;
let Title = styled.h4`
  font-size : 24px;
  color : ${ props => props.Color }
`;

function Detail(props) {

  let [alert, setAlert] = useState(true);
  let [inputData, setInputData] = useState('');

  let [currentTab, setCurrentTab] = useState(0);
  let [switchOn, setSwitchOn] = useState(false);
  

  useEffect(()=>{
    // 2초 후에 alert창을 안보이게
    let Timer = setTimeout(()=>{ setAlert(false) }, 2000);
    console.log('안녕');
    return ()=>{ clearTimeout(Timer) } // Detail 컴포넌트가 사라질 때 실행할 코드
  }, [alert]);

  

  let { id } = useParams();
  // let findProduct = props.products.find(function(product){
  //   return product.id == id;
  // });
  let findProduct = props.products.find(x => x.id == id);
  let history = useHistory();


  return(
    <div className="container">
      <Box>
        <Title className='red'>상세페이지</Title>
      </Box>

      {inputData}
      <input onChange={(e)=>{ setInputData(e.target.value) }} />

      {
        alert === true
        ? (<div className="my-alert-yellow">
            <p>재고가 얼마 남지 않았습니다!</p>
          </div>)
        : null
      }
      
      <div className="row">
        <div className="col-md-6">
        <img src={ findProduct.src } width="100%" alt="제품사진" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{findProduct.title}</h4>
          <p>{findProduct.content}</p>
          <p>{findProduct.price}원</p>

          <Info></Info>

          <button className="btn btn-danger" onClick={()=>{ 
            props.setStock([9,11,12]);
            props.dispatch({type : '항목추가', payload : {id: 2, name: '새로운 상품', quan : 1}}); 
            history.push('/cart'); // 장바구니 페이지로 이동
          }}>주문하기</button> 
          <button className="btn btn-danger" onClick={()=>{
            history.goBack();
          }}>뒤로가기</button> 
        </div>
      </div>

      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0"> 
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={()=>{ setSwitchOn(false); setCurrentTab(0) }}>Option 0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={()=>{ setSwitchOn(false); setCurrentTab(1) }}>Option 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={()=>{ setSwitchOn(false); setCurrentTab(2) }}>Option 2</Nav.Link>
        </Nav.Item>
      </Nav>
        
      <CSSTransition in={switchOn} classNames="wow" timeout={500}>
        <TabContent currentTab={currentTab} setSwitchOn={setSwitchOn} />
      </CSSTransition>

    </div> 
  )
}

function TabContent(props){
  
  // TabContent 컴포넌트가 등장할 때 실행
  useEffect(()=>{
    props.setSwitchOn(true);
  })

  if (props.currentTab === 0) {
    return <div>0번째 내용입니다.</div>
  } else if (props.currentTab === 1) {
    return <div>1번째 내용입니다.</div>
  } else if (props.currentTab === 2) {
    return <div>2번째 내용입니다.</div>
  }
}



function Info(){

  let stock = useContext(stockContext);
  
  return (
    <p>재고 : {stock[0]}</p>
  )
}

// redux store 데이터 가져와서 props로 변환해주는 함수
function state를props화(state){
  return {
    state : state.reducer,
    alert열렸니 : state.reducer2 
  }
}

export default connect(state를props화)(Detail);
