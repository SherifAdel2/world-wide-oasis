import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
  z-index: 1001;

  /* Prevent overflow on any screen */
  max-height: 90vh;
  overflow-y: auto;
  width: min(90vw, 80rem);

  @media (max-width: 48em) {
    padding: 2.4rem 2rem;
    width: 95vw;
    max-height: 85vh;
    border-radius: var(--border-radius-md);
    top: 50%;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-500);
  }

  @media (max-width: 48em) {
    padding: 0.8rem;
    min-width: 4.4rem;
    min-height: 4.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0.8rem;
    right: 0.8rem;
  }
`;

function Modal({ children, onClose }) {
  return createPortal(
    <Overlay>
      <StyledModal>
        <Button onClick={onClose}>
          <HiXMark />
        </Button>
        <div>{children}</div>
      </StyledModal>
    </Overlay>,
    document.body,
  );
}

export default Modal;
