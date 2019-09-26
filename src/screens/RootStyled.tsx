import styled, { createGlobalStyle } from 'styled-components';

const RootContainerstyled = styled.div`
  display: flex;
  flex: 1;
`;

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0px;
    margin: 0px;
  }
  
  #app {
    display: flex;
  }
`;

export { RootContainerstyled, GlobalStyle };
