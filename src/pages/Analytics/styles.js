import styled from 'styled-components';

export const Container = styled.main`
  margin: 20px 0;
  width: 90%;
  max-width: 1336px;
  padding: 60px 30px;
  margin: auto;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;

      svg {
        cursor: pointer;
      }
    }

    h1 {
      margin-left: 40px;
      opacity: 0.2;
    }
  }

  main {
    margin-left: calc(32px + 40px);
    margin-top: 1rem;

    & > div:first-child {
      display: flex;
      align-items: center;
      align-content: center;

      & > span {
        margin-left: 1rem;
        margin-right: 1rem;
        width: 1px;
        height: 1em;
        background: #fff;
        opacity: 0.2;
      }

      p {
        opacity: 0.5;
      }
    }

    #charts {
      margin-top: 2rem;

      & > div {
        margin-top: 1rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 12px;
        grid-column-gap: 12px;
        grid-template-rows: 100px 100px;

        canvas:first-child {
          grid-column: span 1 / auto;
          grid-row: span 2 / auto;
        }
      }
    }
  }

  @media (max-width: 768px) {
    header {
      display: none;
    }

    table {
      thead {
        display: none;
      }
    }
  }

  @media (max-width: 1208px) {
    header {
      display: none;
    }

    main {
      margin: 0;
      & > div:first-child {
        flex-direction: column;

        & > span {
          width: 1rem;
          height: 1px;
          margin: 1em;
        }

        p {
          display: none;
        }
      }

      #charts div {
        justify-content: center;

        canvas {
          width: 90%;
        }
        canvas:first-child {
          grid-column: span 2 / auto;
          grid-row: span 2 / auto;
          width: 100%;
          height: 200px;
        }
      }
    }
  }
`;
