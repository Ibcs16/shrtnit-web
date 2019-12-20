import { animated } from 'react-spring';
import styled from 'styled-components';

export const Container = styled(animated.div)`
  position: relative;
  min-height: 60px;
  width: 100%;
  background: #fff;
  box-shadow: 0 1px 4px 0 rgba(192, 208 230, 0.6);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  /* display: grid;
  grid-template-rows: 1fr 1fr; */
  border: none;
  margin-top: 40px;
  border-radius: 4px;
  padding: 10px;
  /* animation: expand 3s; */
  overflow: hidden;

  p {
    cursor: pointer;
  }

  .left {
    flex: 50%;
    p {
      text-overflow: ellipsis;
      width: 100%;
      max-width: 20rem;
      white-space: nowrap;
      overflow: hidden;
      color: rgba(0, 0, 0, 0.6);
    }
  }

  .right {
    flex: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      color: rgba(0, 0, 0, 0.4);
      color: rgb(4, 211, 97);
      margin-right: 5px;
    }

    button {
      min-height: 2rem;
      min-width: 5rem;
      margin-left: 0.5rem;
      cursor: pointer;
      color: rgb(4, 211, 97);
      /* border: 1px solid rgba(4, 211, 97, 0.4); */
      border: none;
      border-radius: 6px;
      background: rgba(217, 255, 214, 1);

      &.copySuccess {
        background: rgb(4, 211, 97);
        color: #fff;
      }
    }
  }
`;
