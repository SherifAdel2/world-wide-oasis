import styled from "styled-components";

const StyledDataItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 0.8rem 0;

  @media (max-width: 48em) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.4rem;
    padding: 0.6rem 0;
  }
`;

const Label = styled.span`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 500;

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-brand-600);
    flex-shrink: 0;
  }

  @media (max-width: 48em) {
    font-size: 1.2rem;
    color: var(--color-grey-500);
  }
`;

function DataItem({ icon, label, children }) {
  return (
    <StyledDataItem>
      <Label>
        {icon}
        <span>{label}</span>
      </Label>
      {children}
    </StyledDataItem>
  );
}

export default DataItem;
