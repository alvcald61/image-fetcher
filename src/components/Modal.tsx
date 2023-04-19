import React from "react";
import { createPortal } from "react-dom";

type props = {
    children: any
}

const Modal = ({children}: props) => {
  return (
    <div className="modal">
      <div className="modal-content">
        {children}
      </div>
    </div>
  );
};

export default function ImageModal({ children }: props) {
  return createPortal(
    <Modal>{children}</Modal>,
    document.getElementById("root")!!
  );
}
