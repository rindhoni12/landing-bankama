import styled from "styled-components";
import { themeList } from "../../config";

export const ButtonTransparentContent = styled.div`
  display: initial;

  .button_my-course {
    display: flex;
    align-items: center;
    background-color: transparent;
    border: 1px solid var(--colorMain);
    padding: 12px 20px;
    border-radius: 20px;
    max-height: 100%;
    cursor: pointer;
    font-size: 14px;
    color: var(--colorMain);
    gap: 10px;
    transition: 0.3s all ease;

    &:hover {
      background-color: var(--colorMain);
      color: #fff;
      transition: 0.3s all ease;
      transform: scale(1.05);
    }
  }

  .active {
    background-color: var(--colorMain);
    color: #fff;
    transition: 0.3s all ease;
    transform: scale(1.05);
  }
`;

export const ButtonContent = styled.div`
  display: initial;
  z-index: 2;
  .button_my-course {
    display: flex;
    align-items: center;
    background-color: var(--colorMain);
    padding: 14px 24px;
    border-radius: 20px;
    max-height: 100%;
    cursor: pointer;
    font-size: 14px;
    color: #ffffff;
    gap: 10px;
    transition: 0.3s all ease;

    &:hover {
      background-color: #038100;
      transition: 0.3s all ease;
      transform: scale(1.05);
    }
    a {
      background-color: transparent;
    }
  }

  .button_organisasi {
    display: flex;
    align-items: center;
    font-weight: 400;

    background-color: ${({ theme: { theme } }) =>
      theme === themeList.light ? "#f4f4f4" : "var(--mediumColor)"};

    padding: 8px 15px;
    border-radius: 8px;
    width: max-content;
    color: var(--colorMain);
    margin: auto;
    margin-top: 60px;
    gap: 10px;

    :hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
