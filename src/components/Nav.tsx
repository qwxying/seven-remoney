import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';




const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  > ul {
    display: flex;
    align-items: center;
    > li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 25%;
      text-align: center;
      padding: 8px;
      .icon{
        width: 24px;     
        height: 24px;   
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Icon name="home"/>
          <Link to="/home">首页</Link>
        </li>
        <li>
          <Icon name="details"/>
          <Link to="/details">明细</Link>
        </li>
        <li>
          <Icon name="statistics"/>
          <Link to="/statistics">统计</Link>
        </li>
        <li>
          <Icon name="users"/>
          <Link to="/users">我的</Link>
        </li>
      </ul>
    </NavWrapper>
  );
};


export default Nav;