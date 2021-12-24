/*eslint-disable*/

import {useState} from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import './App.css';
import Data from './data.js';

import { Link, Route, Switch } from 'react-router-dom';

function App() {

  let [products, setProducts] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Accessory Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      

      <Route exact path="/">
        <div className="jumbotron">
          <h1>20% Season Off</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling<br/>
            extra attention to featured content or information.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </div>
        <div className="container">
          <div className="row">
            {
              products.map((a, i)=>{
                return <Card products={products[i]} key={i} /> // {a}로 변경가능
              })
            }
          </div>
        </div>
      </Route>
      <Route path="/detail">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="https://www.cartier.co.kr/content/dam/rcq/car/21/82/26/3/2182263.png.scale.314.high.%ED%83%B1%ED%81%AC-%EB%A8%B8%EC%8A%A4%ED%8A%B8-%EC%9B%8C%EC%B9%98-%EC%8A%A4%ED%8B%B8.jpg" width="100%" />
            </div>
            <div className="col-md-6 mt-4">
              <h4 className="pt-5">상품명</h4>
              <p>상품설명</p>
              <p>120000원</p>
              <button className="btn btn-danger">주문하기</button> 
            </div>
          </div>
       </div> 
      </Route>
      {/* <Route path="/어쩌구" component={Modal} ></Route> */}

      
    </div>
  );
}

function Card(props) {
  return(
      <div className="col-md-4">
        <img src={ props.products.src } width="100%" />
        <h4>{ props.products.title }</h4>
        <p>{ props.products.content } & { props.products.price }</p>
      </div>
  )
}

export default App;
