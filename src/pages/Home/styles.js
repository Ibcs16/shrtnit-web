import { animated } from 'react-spring';
import styled from 'styled-components';

export const Container = styled(animated.main)`
  margin: 0 auto;
  padding-top: 10%;
  display: flex;
  max-width: 100%;
  width: 700px;
  justify-content: stretch;
  flex-direction: column;
  align-items: center;
  /* animation-name: fade-in;
  animation-duration: 709ms; */

  h1 {
    font-size: 62px;
  }

  strong {
    color: rgb(4, 211, 97);
  }

  .incomingURLCounter {
    margin-top: 24px;
  }
`;
