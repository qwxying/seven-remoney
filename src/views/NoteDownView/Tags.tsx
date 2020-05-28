import styled from 'styled-components';

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

export {Tags};