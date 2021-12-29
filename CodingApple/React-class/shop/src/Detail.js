import React, {useContext, useEffect, useState} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';
import {stockContext} from './App.js';

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

          <button className="btn btn-danger" onClick={()=>{ props.setStock([9,11,12]) }}>주문하기</button> 
          <button className="btn btn-danger" onClick={()=>{
            history.goBack();
          }}>뒤로가기</button> 
        </div>
      </div>
    </div> 
  )
}

function Info(){

  let stock = useContext(stockContext);
  
  return (
    <p>재고 : {stock[0]}</p>
  )
}

export default Detail;