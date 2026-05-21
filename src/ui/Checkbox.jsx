import styled from "styled-components";

const StyledCheckbox = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;

  & input[type="checkbox"] {
    height: 2.4rem;
    width: 2.4rem;
    outline-offset: 2px;
    transform-origin: 0;
    accent-color: var(--color-brand-600);
    flex-shrink: 0;
  }

  & input[type="checkbox"]:disabled {
    accent-color: var(--color-brand-600);
  }

  & label {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.8rem;

    @media (max-width: 48em) {
      font-size: 1.4rem;
      gap: 0.6rem;
    }
  }

  @media (max-width: 48em) {
    gap: 1.2rem;
    min-height: 4.4rem;
  }
`;

function Checkbox({ checked, onChange, disabled = false, id, children }) {
  return (
    <StyledCheckbox>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <label htmlFor={!disabled ? id : ""}>{children}</label>
    </StyledCheckbox>
  );
}

export default Checkbox;
