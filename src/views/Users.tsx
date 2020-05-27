import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

function Users() {
  return (
    <Wrapper>
      <Layout>
        <h2>我的</h2>
      </Layout>
      <Nav/>
    </Wrapper>
  );
}

export default Users;