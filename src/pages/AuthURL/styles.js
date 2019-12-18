import styled from 'styled-components';

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px;
  padding: 24px;
  max-width: 100%;
  width: 320px;
  background: white;
  border-radius: 8px;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 40%;
  left: 50%;

  h1:last-of-type {
    color: rgba(0, 0, 0, 0.3);
  }

  h1 {
    color: rgba(0, 0, 0, 0.7);
    text-align: center;
    margin-bottom: 20px;
  }

  input {
    background: #fff;
    border: none;
    min-height: 4rem;
    min-width: 100%;
    border-radius: 5px;
    padding: 10px;
    border: 1px solid rgb(4, 211, 97);
    margin-bottom: 8px;
  }

  button {
    color: #fff;
    background: rgb(4, 211, 97);
    border: none;
    border-radius: 5px;
    min-height: 3rem;
    width: 50%;
    font-weight: bold;
    margin: 0px auto 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      margin-right: 10px;
    }
  }
`;
