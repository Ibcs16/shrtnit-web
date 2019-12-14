import styled from "styled-components";

export const Container = styled.main`
  margin: 10% auto;
  display: flex;
  max-width: 100%;
  width: 700px;
  justify-content: stretch;
  flex-direction: column;
  align-items: center;
  animation-name: fade-in;
  animation-duration: 709ms;

  h1 {
    font-size: 62px;

    & + h4 {
      margin-top: 20px;
    }
  }

  strong {
    /* color: ;rgb(4, 211, 97) */
    color: #d92121;
  }
`;
