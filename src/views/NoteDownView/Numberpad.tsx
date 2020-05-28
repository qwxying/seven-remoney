import styled from 'styled-components';

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

export {NumberPad, NumberKeys, OperationKeys, Confirm, Delete, Add};