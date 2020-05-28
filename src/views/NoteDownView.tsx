import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import Icon from '../components/Icon';

const NoteDownView = styled.div`
  height: 100vh;  
  display: flex;
  flex-direction: column;
`;
const LayoutWrapper = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

const Category = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > a {
    text-align: center;
    padding: 16px 0;
    width: 48px;
  }
`;
const Tab = styled.ul`
  
  
  font-size: 16px;
  display: flex;
  > li {
    :first-child{
      border-radius: 8px 0 0 8px;
    }
    :nth-child(2){
      border-radius: 0 8px 8px 0;
    }
    border: 1px solid #2a3040;
    width: 50%;
    text-align: center;
    padding: 4px 32px;
    &.selected {
      background:#2a3040;
      color: #fff;
    }
  }
`;
const Output = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  font-size: 16px;
`;

const Tags = styled.section`
  > ul > li{
    display: flex;
    padding: 14px 40px;
    > ul{
      display: flex;
      justify-content: space-between;
      flex-grow: 1;
      li {
        display: flex;
        flex-direction: column;
      }
    }
  }

`;
const Remarks = styled.section`
  display: flex;
  line-height: 2.3;
  align-items: center;
  div{
    border-left: 1px solid #767676;
    height: 16px;
  }
  input {
    flex-grow: 1;
    margin: 0 16px;
    height: 32px;
  }

`;
const BillingDate = styled.span`
  text-align: center;
  width: 25vw;

`;
const NumberPad = styled.section`
  display: flex;
  flex-wrap: wrap;
  button {
    background: #3d4454;
    color: white;
  }
  
`;

const NumberKeys = styled.div`
  width: 70.5vw;

  button {
    text-align: center;
    font-size: 20px;
    width: 23.5vw;
    border: 1px solid #313745;
    line-height: 2.3;    
  }
  
`;

const OperationKeys = styled.div`
  
  flex-grow: 1;
  button {
    border: 1px solid #313745;
    text-align: center;
    font-size: 20px;
    line-height: 2.3;    
    }

  display: flex;
  flex-direction: column;
  align-items: stretch;
  
`;
const Delete = styled.button`
`;

const Confirm = styled.button`
    border: 1px solid #ec575d!important;
    flex-grow: 1;
    background:#ec575d!important;
`;
const Add = styled.button`
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
            <span>账单金额</span><span>￥0.00</span>
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