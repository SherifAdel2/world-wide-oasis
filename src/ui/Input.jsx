import styled from "styled-components";

const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
  width: 100%;

  @media (max-width: 48em) {
    padding: 1rem 1.2rem;
    min-height: 4.4rem;
    font-size: 1.6rem;
  }
`;

export default Input;
