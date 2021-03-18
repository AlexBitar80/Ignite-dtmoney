import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.6rem;

    th {
      color: var(--text-body);
      padding: 1rem 2rem;
      font-weight: 400;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      background: var(--shape);
      border: 0;
      color: var(--text-body);
      border-radius: 0.25rem;

      &:first-child {
        color: var(--text-title);
      }

      &.income {
        color: var(--green);
      }
      &.outcome {
        color: var(--red);
      }
    }
  }
`;
