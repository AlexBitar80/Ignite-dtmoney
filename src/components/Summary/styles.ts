import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -4.5rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    color: var(--text-title);
    border-radius: 0.25rem;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      font-size: 2rem;
      margin-top: 1rem;
      line-height: 3rem;
      font-weight: 500;
    }

    &.highlight-background {
      background: var(--green);
      color: #fff;
    }
  }
`;
