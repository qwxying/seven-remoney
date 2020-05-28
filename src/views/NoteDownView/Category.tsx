import styled from 'styled-components';

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
    white-space: nowrap;  
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

export {Category, Tab};