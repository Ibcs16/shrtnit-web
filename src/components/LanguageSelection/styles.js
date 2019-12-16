import { animated } from 'react-spring';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 30px;
  z-index: 9999;
  width: 30px;
`;

export const Badge = styled.button`
  height: 30px;
  width: 30px;
  background: none;
  border: 0;
  cursor: pointer;
  position: relative;
`;

export const TranslationBox = styled(animated.div)`
  position: absolute;
  width: 260px;
  right: calc(100% - 30px);
  bottom: calc(100% + 10px);
  background: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  padding: 20px;

  &::before {
    content: '';
    position: absolute;
    right: 10px;
    bottom: -10px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid rgba(0, 0, 0, 0.6);
  }
`;

export const Language = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  width: 100%;
  min-height: 40px;
  border-radius: 4px;
  padding: 5px;
  cursor: pointer;

  ${props =>
    props.selected &&
    css`
      /* background: rgba(255, 255, 255, .9); */
      color: rgb(4, 211, 97);
    `}

  svg {
    cursor: pointer;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  &:nth-child(even) {
    margin-top: 5px;
    margin-bottom: 5px;
  }

  button {
    background: transparent;
    border: none;
  }
`;
