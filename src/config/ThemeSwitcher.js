import { FiSun, FiMoon } from "react-icons/fi";
import { devices } from "../assets/_respondTo";
import React, { useContext } from "react";
import themeContext from "./themeContext";
import styled from "styled-components";
import themeList from "./themeList";

const ThemeSwitcherStyles = styled.div`
  padding: 0 10px;
  ${devices.smartphone} {
    padding: 0px;
  }
  label {
    --gap: 5px;
    --size: 20px;
    height: 30px;
    width: 55px;
    padding: 0 var(--gap);
    position: relative;
    cursor: pointer;
    border-radius: 50px;
    background: ${({ theme: { theme } }) =>
      theme === themeList.light ? "#1a1d29" : "#979797"};
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .icon {
      height: var(--size);
      width: var(--size);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    svg {
      width: 75%;
      color: #ffffff;
    }
  }
  input {
    width: 0;
    height: 0;
    display: none;
    visibility: hidden;
  }
  label::after {
    position: absolute;
    content: "";
    border-radius: 50%;
    transform: translateY(-50%);
    top: 50%;
    left: var(--gap);
    height: var(--size);
    width: var(--size);
    background-color: var(--colorMain);
    transition: 0.5s ease left;
    z-index: -1;
  }
  input:checked + label::after {
    left: calc(100% - var(--size) - var(--gap));
  }
`;

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(themeContext);
  return (
    <ThemeSwitcherStyles>
      <input
        type="checkbox"
        id="switcher"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />
      <label htmlFor="switcher">
        <div className="icon">
          <FiSun />
        </div>
        <div className="icon">
          <FiMoon />
        </div>
      </label>
    </ThemeSwitcherStyles>
  );
}
