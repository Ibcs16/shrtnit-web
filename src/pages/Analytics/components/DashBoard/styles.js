import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 1rem;

  .noAccesses {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    grid-column: 1 / 3;
    grid-row: 1 / 3;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      width: 100%;
      text-align: center;
    }
  }
`;
