import React from 'react';
import Icon from '../components/Icon';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {Tags} from './NoteDownView/Tags';
import Layout from '../components/Layout';
import {Output} from './NoteDownView/Output';
import {Category, Tab} from './NoteDownView/Category';
import {BillingDate, Remarks} from './NoteDownView/Remarks';
import {Add, Confirm, Delete, NumberKeys, NumberPad, OperationKeys} from './NoteDownView/Numberpad';

const NoteDownView = styled.div`
  height: 100vh;  
  display: flex;
  flex-direction: column;
`;
const LayoutWrapper = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

function NoteDown() {
  return (<NoteDownView>
      <LayoutWrapper>
        <Layout>
          <Category>
            <NavLink to="/">返回</NavLink>
            <Tab>
              <li className="selected">支出</li>
              <li>收入</li>
            </Tab>
            <NavLink to="/"> </NavLink>
          </Category>
          <Output>
            <span>账单金额</span><span className="bill">￥0.00</span>
          </Output>
          <Tags>
            <ul>
              <li>
                <ul>
                  <li><Icon name="salary"/><span>工资</span></li>
                  <li><Icon name="food"/><span>餐饮</span></li>
                  <li><Icon name="traffic"/><span>交通</span></li>
                  <li><Icon name="redEnvelope"/><span>红包</span></li>
                </ul>
              </li>
              <li>
                <ul>
                  <li><Icon name="salary"/><span>工资</span></li>
                  <li><Icon name="food"/><span>餐饮</span></li>
                  <li><Icon name="traffic"/><span>交通</span></li>
                  <li><Icon name="redEnvelope"/><span>红包</span></li>
                </ul>
              </li>
              <li>
                <ul>
                  <li><Icon name="salary"/><span>工资</span></li>
                  <li><Icon name="food"/><span>餐饮</span></li>
                  <li><Icon name="traffic"/><span>交通</span></li>
                  <li><Icon name="redEnvelope"/><span>红包</span></li>
                </ul>
              </li>


            </ul>
          </Tags>
          <Remarks>
            <BillingDate>今天</BillingDate>
            <div>
            </div>
            <input placeholder="请输入备注信息"/>
          </Remarks>
        </Layout>
      </LayoutWrapper>
      <NumberPad>
        <NumberKeys>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>￥</button>
          <button>0</button>
          <button>·</button>
        </NumberKeys>
        <OperationKeys>
          <Delete>删除</Delete>
          <Add>+</Add>
          <Confirm>确定</Confirm>
        </OperationKeys>
      </NumberPad>
    </NoteDownView>
  );
}

export default NoteDown;