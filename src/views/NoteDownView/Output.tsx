import styled from 'styled-components';

const Output = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  font-size: 16px;
  box-shadow: inset 0 -4px 4px -4px rgba(0,0,0,0.25),
              inset 0 4px 4px -4px rgba(0,0,0,0.25);
  .bill {
    font-size: 24px;
    color: #ec575d;
  }
`;

export {Output};