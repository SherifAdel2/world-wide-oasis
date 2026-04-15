import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";
import { useOutsideClick } from "../hooks/useOutsideClick";

const StyledModal = styled.div`
  position: fixed;

  // center modal
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);

  padding: 3.2rem 4rem;
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
`;

const Button = styled.button`
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  background: none;
  border: none;

  padding: 0.4rem;
  border-radius: var(--border-radius-sm);

  &:hover {
    background-color: var(--color-grey-100);
  }
`;

const ModalContext = createContext();

function Modal({ children }) {
  // which modal is open
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  // Inject onClick into child
  return cloneElement(children, {
    onClick: () => open(opensWindowName),
  });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);

  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Button onClick={close}>
          <HiXMark />
        </Button>

        {/* Inject close function into modal content */}
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </StyledModal>
    </Overlay>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;

/*
<Modal>
  <Modal.Open opens="edit">
    <button>Edit</button>
  </Modal.Open>

  <Modal.Window name="edit">
    <EditForm />
  </Modal.Window>
</Modal>
 */
