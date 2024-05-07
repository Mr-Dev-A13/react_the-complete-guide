import { useEffect, useRef } from "react";

import { createPortal } from "react-dom";

export default function Modal ({children, open, onClose, className = ""}) {
  const modalRef = useRef();

  useEffect(() => {
    const modal = modalRef.current;

    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog
      ref={modalRef}
      onClose={onClose}
      className={`modal ${className}`}
    >
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}