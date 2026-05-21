import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;

      /* Stack horizontally-spaced rows on small screens */
      @media (max-width: 48em) {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.8rem;
      }
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;

      /* Reduce gap on small screens */
      @media (max-width: 48em) {
        gap: 1rem;
      }
    `}
`;

Row.defaultProps = {
  type: "vertical",
};

export default Row;
