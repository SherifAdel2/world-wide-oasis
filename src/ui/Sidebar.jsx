import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (max-width: 48em) {
    grid-row: 2 / 3;
    grid-column: 1 / -1;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 0.8rem 1.6rem;
    gap: 0;

    border-right: none;
    border-bottom: 1px solid var(--color-grey-100);

    position: sticky;
    top: 0;
    z-index: 100;
  }
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
