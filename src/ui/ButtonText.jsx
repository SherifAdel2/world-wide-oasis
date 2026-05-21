import styled from "styled-components";

const ButtonText = styled.button`
  color: var(--color-brand-600);
  font-weight: 500;
  text-align: center;
  transition: all 0.3s;
  background: none;
  border: none;
  border-radius: var(--border-radius-sm);

  &:hover,
  &:active {
    color: var(--color-brand-700);
  }

  @media (max-width: 48em) {
    min-height: 4.4rem;
    min-width: 4.4rem;
    padding: 0.8rem 1.2rem;
  }
`;

export default ButtonText;
