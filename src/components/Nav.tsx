import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';

const NavWrapper = styled.nav`
line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  > ul {
    display: flex;
    align-items: center;
    //height: 72px;
    > li {
      width: 25%;
      text-align: center;
      padding: 16px;
    }
  }
`;

const Nav = () =>{
  return(
    <NavWrapper>
      <ul>
        <li>
          <Link to="/home">首页</Link>
        </li>
        <li>
          <Link to="/details">明细</Link>
        </li>
        <li>
          <Link to="/statistics">统计</Link>
        </li>
        <li>
          <Link to="/users">我的</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}


export default Nav;