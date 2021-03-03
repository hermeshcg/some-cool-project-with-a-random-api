import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
  background: #005288;

  .loading {
    margin: 100px;
    animation: spin 1s linear infinite;
  }
  @keyframes spin {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }
`;
