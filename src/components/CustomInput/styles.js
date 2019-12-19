import styled from 'styled-components';

export const CustomInputContainer = styled.form`
  @import url('https://fonts.googleapis.com/css?family=Nunito:300,400,700|Roboto:300,400,700&display=swap');
  z-index: 9999;
  width: 100%;
  position: relative;
  background: #fff;
  height: 60px;
  max-height: 80px;
  border-radius: ${props => `${props.borderRadius}px`};
  margin-top: 40px;
  display: flex;
  padding: 0.5rem 20px;
  align-items: center;
  /* animation-name: shrink;
  animation-duration: 1ms; */
  box-shadow: 3px 3px rgba(0, 0, 0, 0.1);

  &.nope {
    animation: nope 700ms;
  }

  input {
    flex: 0 auto;
    box-shadow: 0 1px 4px 0 rgba(192, 208 230, 0.6);
    width: 100%;
    position: relative;
    border: none;
    font-family: 'Nunito', 'Roboto', sans-serif;
    color: rgba(0, 0, 0, 0.7);
    background: transparent;
    font-weight: 700;
    height: 100%;

    &::placeholder {
      color: rgba(0, 0, 0, 0.4);
    }
  }

  div {
    max-height: 24px;
    max-width: 24px;

    &:first-of-type {
      margin-right: 10px;
    }

    &:last-of-type {
      margin-left: 10px;
    }

    button {
      max-width: 100%;
      border: none;
      background: transparent;
      max-height: 100%;
      cursor: pointer;
    }
  }
`;
