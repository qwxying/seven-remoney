import Layout from '../components/Layout';
import React from 'react';
import Nav from '../components/Nav';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

function Details() {
  return (
    <Wrapper>
      <Layout>
        <h2>明细页面</h2>
      </Layout>
      <Nav/>
    </Wrapper>
  );
}

export default Details;