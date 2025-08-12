import React from "react";
import "../styles/Modal.css";

/**
 * Modal
 * Props:
 * - isOpen: boolean
 * - onClose: () => void
 * - title?: string
 * - children: JSX
 */
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  // Stop clicks inside the modal from closing the overlay
  const stop = (e) => e.stopPropagation();

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-window" onClick={stop}>
        <div className="modal-header">
          <h3 className="modal-title">{title}</h3>
          <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
