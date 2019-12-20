import { Form, Input } from '@rocketseat/unform';
import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  color: rgb(79, 79, 79);
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    opacity: 0.5;
  }

  .modal-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
    position: fixed;
  }

  .modal {
    z-index: 100;
    background: white;
    position: relative;
    margin: 1.75rem auto;
    width: 100%;
    border-radius: 3px;
    max-width: 415px;
    padding: 2rem;
    border-radius: 8px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 30%;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
  }

  .modal-close-button {
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1;
    color: #000;
    opacity: 0.3;
    cursor: pointer;
    border: none;
  }

  button {
    font-size: 0.9rem;
    font-weight: 700;
    border: none;
    border-radius: 3px;
    padding: 0.3rem 1rem;
    margin-left: 0.5rem;
  }

  .button-default {
    background: transparent; //#247ba0;
    color: #fff;
  }
`;

export const ModalContent = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
  width: 100%;

  span {

    align-self: start;
    margin-bottom: 2px;

    span:first-child {
      color: rgba(0, 0, 0, 0.3);
    }
  }

  button {
    witdh: 100%;
    margin: 5px;
    height: 44px;
    background: ;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background: 0.2s;
    background: rgb(4,211,97);
    // text-decoration: none;
    // diplay: flex;
    // justify-content: center;
    // align-items: center;
    padding: 5px;
    cursor: pointer;
    min-width: 100%;

    &:hover {
      color: rgba(255, 255, 255, 0.7);
      background: ${darken(0.03, 'rgb(4,211,97)')};
    }
  }

  .noCode {
    color: #d92121;
  }
`;

export const ModalInput = styled(Input)`
  background: white; //rgba(0, 0, 0, 0.1);
  border: 4px;
  height: 44px;
  padding: 0 15px;
  color: rgb(79, 79, 79);
  margin: 0 0 10px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid rgb(4, 211, 97);
  margin-top: 8px;

  &::placeholder {
    color: rgba(0, 0, 0, 0.7);
  }
`;
