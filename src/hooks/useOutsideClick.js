import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  // listenCapturing used to makes the handler not to bubble up as it will cause a problem
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }

      document.addEventListener("click", handleClick, listenCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing],
  );

  return ref;
}
