/*eslint-disable*/

import {useState} from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import './App.css';
import Data from './data.js';
import Detail from './Detail.js';
import axios from 'axios'

import { Link, Route, Switch } from 'react-router-dom';

function App() {

  let [products, setProducts] = useState(Data);
  let [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Accessory Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
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

      
    <Switch>
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
          
          <button className="btn btn-primary" onClick={()=>{

            axios.post('서버URL', { id : 'codingapple', pw : 1234 }).then();

            setLoading(true);
            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((result)=>{
              console.log(result.data);
              setProducts([...products, ...result.data]);
              setLoading(false);
            })
            .catch(()=>{              
              setLoading(false);
            })

          }}>더보기</button>
          {
            loading === true
            ? (
              <div>
                <p>~~로딩중입니다~~</p>
              </div>
              )
            : null
          }
        </div>
      </Route>

      
      <Route path="/detail/:id">
        <Detail products={products} />
      </Route>

      <Route path="/:id"> 
        <div>아무거나 적었을 때 이거 보여주셈</div>
      </Route>

    </Switch>

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
