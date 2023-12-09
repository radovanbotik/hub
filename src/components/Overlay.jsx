import React from "react";

const Overlay = props => {
  const { isOpen, setIsOpen } = props;
  const open = isOpen ? "animate-in" : "animate-out";

  // if (isOpen)
  return (
    <div
      className={`bg-slate-900  w-full h-full fixed z-30 inset-0 ${open}`}
      onClick={e => {
        setIsOpen(false);
      }}
    ></div>
  );
  // if (!isOpen) return;
};

export default Overlay;
