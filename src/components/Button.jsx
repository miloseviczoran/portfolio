import React from "react";

const handleClickButton = () => {
  const url = "https://portfolio-zoranmilosevic-b2d59.web.app/";
  window.open(url, "_blank");
};

const Button = ({ title, id, rightIcon, leftIcon, containerClass }) => {
  return (
    <button
      onClick={handleClickButton}
      id={id}
      className={`group realtive z-10 w-fit cursor-pointer overflow-hidden rounded-full
         px-7 py-3 text-black ${containerClass}`}
    >
      {leftIcon}
      <span className="relative incline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
      {rightIcon}
    </button>
  );
};

export default Button;
