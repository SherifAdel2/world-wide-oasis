import styled from "styled-components";

const TableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  @media (max-width: 48em) {
    flex-wrap: wrap;
    gap: 1rem;
    width: 100%;

    & > * {
      flex: 1;
      min-width: 12rem;
    }
  }
`;

export default TableOperations;
