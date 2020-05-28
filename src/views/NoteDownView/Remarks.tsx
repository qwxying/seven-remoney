import styled from 'styled-components';

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

export {Remarks, BillingDate};