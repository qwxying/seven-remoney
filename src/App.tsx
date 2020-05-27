import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import styled from 'styled-components';
import Nav from './components/Nav';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
          <Switch>
            <Redirect exact from="/" to="home"/>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/details">
              <Details/>
            </Route>
            <Route path="/statistics">
              <Statistics/>
            </Route>
            <Route path="/users">
              <Users/>
            </Route>
            <Route path="*">
              <NoMatch/>
            </Route>
          </Switch>
        </Main>
        <Nav/>
      </Wrapper>
    </Router>
  );
}

function Home() {
  return <h2>首页</h2>;
}

function Details() {
  return <h2>明细页面</h2>;
}

function Statistics() {
  return <h2>统计页面</h2>;
}

function Users() {
  return <h2>我的</h2>;
}

function NoMatch() {
  return <div>
    <Link to='/home'>当前页面不存在，点击返回首页</Link>
  </div>;
}

export default App;
