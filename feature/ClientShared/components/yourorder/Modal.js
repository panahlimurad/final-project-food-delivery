import React, { useState } from 'react';

function Modal({ isOpen, onClose, children }) {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${isOpen ? '' : 'hidden'}`}
    >
      <div className="modal-overlay absolute w-full h-full bg-gray-950 opacity-50" onClick={onClose}></div>

      <div className="modal-container w-[60%] h-[50%] mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
