import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
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
        
        &.selected {
          color: #0092ff;
          .icon {
            fill: #0092ff;
          }
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
          <NavLink to="/home" activeClassName="selected">
            <Icon name="home"/>
            首页
          </NavLink>
        </li>
        <li>
          <NavLink to="/details" activeClassName="selected">
            <Icon name="details"/>
            明细
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="statistics"/>
            统计
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" activeClassName="selected">
            <Icon name="users"/>
            我的
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};


export default Nav;