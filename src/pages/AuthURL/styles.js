import styled from "styled-components";

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10% auto;
  width: 720px;
  max-width: 100%;

  h1:last-of-type {
    opacity: 0.1;
  }

  h1 {
    text-align: center;
    margin-bottom: 20px;
  }

  input {
    background: #fff;
    border: none;
    min-height: 4rem;
    min-width: 50%;
    margin: 0 auto 10px;
    border-radius: 5px;
    padding: 10px;
  }

  button {
    color: #fff;
    background: rgb(4, 211, 97);
    border: none;
    border-radius: 5px;
    min-height: 3rem;
    width: 50%;
    font-weight: bold;
    margin: 0 auto 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      margin-right: 10px;
    }
  }
`;
