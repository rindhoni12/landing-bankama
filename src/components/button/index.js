import React from "react";
import { ButtonContent, ButtonTransparentContent } from "./ButtonElements";

const Button = (item) => {
  return (
    <ButtonContent>
      <button
        style={item.style}
        onClick={item.onClick}
        id={item.id}
        to={item.to}
        className="button_my-course"
      >
        <item.icon />
        <a href={item.to}>{item.label}</a>
      </button>
    </ButtonContent>
  );
};

const ButtonTransparent = (item) => {
  return (
    <ButtonTransparentContent>
      <button
        style={item.style}
        onClick={item.onClick}
        id={item.id}
        className={`button_my-course ${item.active}`}
      >
        <item.icon />
        {item.label}
      </button>
    </ButtonTransparentContent>
  );
};

export { ButtonTransparent, Button };
