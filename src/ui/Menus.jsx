import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiEllipsisVertical } from "react-icons/hi2";
import styled from "styled-components";
import { useOutsideClick } from "../hooks/useOutsideClick";

// Container for menu (just layout)
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

// Button (3 dots)
const StyledToggle = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);

  transform: translateX(0.8rem);

  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`;

// Dropdown list
const StyledList = styled.ul`
  position: fixed; // important for absolute screen positioning

  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  // dynamic position
  right: ${(props) => props.position.x}px;
  top: ${(props) => props.position.y}px;
`;

// Each button inside menu
const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;

  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-50);
  }
`;

// Create shared context
const MenusContext = createContext();

function Menus({ children }) {
  // which menu is open
  const [openId, setOpenId] = useState("");

  // where menu should appear
  const [position, setPosition] = useState(null);

  const close = () => setOpenId("");
  const open = setOpenId;

  return (
    <MenusContext.Provider
      value={{ openId, close, open, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}

function Toggle({ id }) {
  // Access shared state
  const { openId, close, open, setPosition } = useContext(MenusContext);

  function handleClick(e) {
    e.stopPropagation(); // prevent outside click closing immediately

    // get button position
    const rect = e.target.closest("button").getBoundingClientRect();

    // calculate where menu should appear
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });

    // toggle logic
    openId === "" || openId !== id ? open(id) : close();
  }

  return (
    <StyledToggle onClick={handleClick}>
      <HiEllipsisVertical />
    </StyledToggle>
  );
}

function List({ id, children }) {
  const { openId, position, close } = useContext(MenusContext);

  // detect outside click
  const ref = useOutsideClick(close, false);

  // show only if this menu is active
  if (openId !== id) return null;

  return createPortal(
    <StyledList position={position} ref={ref}>
      {children}
    </StyledList>,
    document.body, // render outside app root to avoids overflow / z-index issues
  );
}

function Button({ children, icon, onClick }) {
  const { close } = useContext(MenusContext);

  function handleClick() {
    onClick?.(); // optional click
    close(); // close menu after click
  }

  return (
    <li>
      <StyledButton onClick={handleClick}>
        {icon}
        <span>{children}</span>
      </StyledButton>
    </li>
  );
}

// Attach components (compound pattern)
Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;

/*
<Menus>
  {bookings.map((booking) => (
    <Menus.Menu key={booking.id}>
      <Menus.Toggle id={booking.id} />

      <Menus.List id={booking.id}>
        <Menus.Button>Edit</Menus.Button>
        <Menus.Button>Delete</Menus.Button>
      </Menus.List>
    </Menus.Menu>
  ))}
</Menus>
*/
