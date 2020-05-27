import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import Icon from '../components/Icon';

const Title = styled.section`
  text-align: center;
  background: #0092ff;
  color: #fff;
  font-size: 18px;
  padding: 13px 0 10px 0;
`;
const Overview = styled.section`
  background:#0092ff;
  color: #fff;
  padding: 24px;
  > ol > :nth-child(2){
  display: flex;
  }
`;

const Expense = styled.li`
  font-size: 36px;
  padding: 24px 0;

`;
const Income = styled.li`

`;
const NoteDown = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  > button {
    background:#0092ff;
    height: 36px;
    width: 75vw;
    margin: 24px auto;
    color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 3px rgba(0,0,0,0.25);
`;
const Recent = styled.section`
  padding: 8px 24px;
  font-size: 16px;
  li {
    padding: 8px 0;
    display: flex;
    justify-content: space-between;  
  }
  div{
    > .icon {margin: 0 8px;}
    > span {margin-left: 8px;}
    display: flex;
    align-items: center;
  }
`;

function Home() {
  return (
    <Layout>
      <Title>小七记账</Title>
      <Overview>
        <ol>
          <li><span>本月支出（元）</span><Expense>￥500.00</Expense></li>
          <li><span>本月收入</span><Income>￥6868.00</Income></li>
        </ol>
      </Overview>
      <NoteDown>
        <button>记一笔</button>
      </NoteDown>
      <Recent>
        <ol>
          <li>
            <div><Icon name="salary"/><span>工资</span></div>
            <span>￥+6868.00</span></li>
          <li>
            <div><Icon name="food"/><span>餐饮</span></div>
            <span>￥-100.00</span></li>
          <li>
            <div><Icon name="traffic"/><span>交通</span></div>
            <span>￥-120.00</span></li>
          <li>
            <div><Icon name="redEnvelope"/><span>红包</span></div>
            <span>￥-280.00</span></li>
          <li>
            <div><Icon name="salary"/><span>工资</span></div>
            <span>￥+6868.00</span></li>
          <li>
            <div><Icon name="food"/><span>餐饮</span></div>
            <span>￥-100.00</span></li>
          <li>
            <div><Icon name="traffic"/><span>交通</span></div>
            <span>￥-120.00</span></li>
          <li>
            <div><Icon name="redEnvelope"/><span>红包</span></div>
            <span>￥-280.00</span></li>
          <li>
            <div><Icon name="salary"/><span>工资</span></div>
            <span>￥+6868.00</span></li>
          <li>
            <div><Icon name="food"/><span>餐饮</span></div>
            <span>￥-100.00</span></li>
          <li>
            <div><Icon name="traffic"/><span>交通</span></div>
            <span>￥-120.00</span></li>
          <li>
            <div><Icon name="redEnvelope"/><span>红包</span></div>
            <span>￥-280.00</span></li>
        </ol>
      </Recent>
    </Layout>
  );
}

export default Home;