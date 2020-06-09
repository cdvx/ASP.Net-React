import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import Employees from './Components/Employees';
import AddEmployee from './Components/Add';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom'

import './App.css';

const Header = styled.header`
  background-color: #13132f;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  .App-logo {
    height: 7vmin;
    pointer-events: none;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: yellow;
  width: 100%;
  margin: auto 20px;
  a {
    text-decoration: none;
    color: beige;
  }
`

const Left = styled.div`
  width 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0 30px;
`

const Right = styled.div`
  width 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 0 30px;
  align-items: center;
`

const App = () => {
  return (
    <Wrapper>
      <Router>
      <Header>
        <Nav>
          <Left>
            <Link to={'/'}><img src={logo} className="App-logo" alt="logo" /></Link>
          </Left>
          <Right>
            <Link to={'/add-user'}>Add +</Link>
          </Right>
        </Nav>
      </Header>
      <Switch>
        <Route exact path='/' component={()=><Employees url={'/api/employees'} />} />
        <Route path='/add-user' component={()=><AddEmployee url={'/api/employees'} />} />
      </Switch>
      </Router>
    </Wrapper>
  );
}

export default App;
