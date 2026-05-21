import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;

  @media (max-width: 48em) {
    padding: 0.8rem 0;
  }
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;

  @media (max-width: 48em) {
    height: 6.4rem;
  }
`;

function Logo() {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? "/logo-dark.png" : "/logo-light.png";

  return (
    <StyledLogo>
      <Img src={src} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
