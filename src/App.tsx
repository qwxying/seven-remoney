import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import Layout from 'components/Layout';


function App() {
  return (
    <Router>
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
    </Router>
  );
}

function Home() {
  return (
    <Layout>
      <h2>这是首页</h2>
    </Layout>
  );
}

function Details() {
  return (
    <Layout>
      <h2>明细页面</h2>
    </Layout>
  );
}

function Statistics() {
  return (
    <Layout>
      <h2>统计页面</h2>
    </Layout>
  );
}

function Users() {
  return (
    <Layout>
      <h2>我的</h2>
    </Layout>
  );
}

function NoMatch() {
  return <div>
    <Link to='/home'>当前页面不存在，点击返回首页</Link>
  </div>;
}

export default App;
