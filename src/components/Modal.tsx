import "../styles/global.scss";
import React, { useState } from "react";
import Draggable from "react-draggable";

interface ModalProps {
  text: string,
  children: JSX.Element;
}

const Modal = (props: ModalProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggleModal() {
    setIsOpen(!isOpen);
    console.log("click");
  }

  return (
    <div >
      <button onClick={toggleModal} className="link" type="button">{props.text}</button>

      <div onClick={() => setIsOpen(false)} className={`fixed inset-0 bg-black bg-opacity-0 ${isOpen ? "block" : "hidden"}`}></div>
      
      <div className="hidden sm:absolute z-10 sm:bottom-[10em] sm:left-[50em]">
        <div className="flex min-h-full">
          <Draggable>
            <div className={`${isOpen ? "block" : "hidden"} cursor-pointer`}>
              <div className="h-6 border-t border-l border-r border-dark-green bg-beige flex pl-2">
                <div onClick={() => setIsOpen(false)}>x</div>
              </div>
              <div className={`justify-center p-4 border bg-beige border-dark-green text-sm ${isOpen ? "block" : "hidden"}`}>
                {props.children}
              </div>
            </div>
          </Draggable>
        </div>
      </div>
    </div>
  )
}

export default Modal;