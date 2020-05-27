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
      width: 25%;
      text-align: center;
      > a {      
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 8px;
        
        .icon{
          width: 24px;     
          height: 24px;   
        }
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to="/home">
            <Icon name="home"/>
            首页
          </Link>
        </li>
        <li>
          <Link to="/details">
            <Icon name="details"/>
            明细
          </Link>
        </li>
        <li>
          <Link to="/statistics">
            <Icon name="statistics"/>
            统计
          </Link>
        </li>
        <li>
          <Link to="/users">
            <Icon name="users"/>
            我的
          </Link>
        </li>
      </ul>
    </NavWrapper>
  );
};


export default Nav;