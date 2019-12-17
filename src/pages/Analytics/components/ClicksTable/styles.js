import { darken, lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.table`
  margin-top: 1rem;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0px 5px;

  th {
    color: rgba(255, 255, 255, 0.5);
    text-align: left;
    padding-left: 15px;
    padding-bottom: 10px;
  }

  @media (max-width: 768px) {
    tr {
      margin-bottom: 10px;
      display: flex;
      flex-wrap: wrap;
      padding: 15px 0px;

      td {
        display: block;
        width: 100%;
      }
    }
  }
`;

export const ClickRow = styled.tr`
  cursor: pointer;
  background: rgb(25, 24, 31);
  border-radius: 5px;
  transition: background 0.2s ease 0s;

  &:hover {
    background: ${lighten(0.03, 'rgb(29, 28, 36)')};
  }

  td {
    font-weight: 400;
    padding: 10px 15px;

    &:first-child {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }

    &:last-child {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
`;
