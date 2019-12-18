import { animated } from 'react-spring';
import styled from 'styled-components';

export const Container = styled(animated.div)`
  position: relative;
  min-height: 60px;
  width: 100%;
  background: #fff;
  box-shadow: 0 1px 4px 0 rgba(192, 208 230, 0.6);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  border: none;
  margin-top: -2rem;
  border-radius: 0px 0px 16px 16px;
  padding: 20px 40px;
  padding-top: 2rem;
  /* animation: expand 3s; */
  overflow: hidden;
  justify-content: space-between;
  align-item: center;

  @media (max-width: 608px) {
    grid-gap: 8px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;

    div {
      grid-row: auto;
    }
  }
`;
export const UrlOption = styled.div`
  width: 100%;
  border: none;
  background: transparent;
  grid-row: 1;
  display: none;
  border: 1px solid rgba(4, 211, 97, 0.7);
  border-radius: 4px;
  padding: 10px;

  div:first-child,
  div:last-child {
    width: 20px;
    height: 20px;
    svg {
      width: 20px;
      height: 20px;
      color: rgb(4, 211, 97);
    }
  }

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UrlOptionInput = styled.input`
  width: 100%;
  border: none;
  background: transparent;
  font-family: 'Nunito', 'Roboto', sans-serif;
  margin-left: 5px;
  flex: auto;
`;
