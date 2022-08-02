import styled from "styled-components";
import { Link } from "react-scroll";
import { devices } from "../../assets/_respondTo";
import { themeList } from "../../config";

export const HeaderSite = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  position: sticky;
  font-size: 1rem;
  height: 80px;
  z-index: 6;
  top: 0;
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);

  &.shrink {
    background-color: ${({ theme: { theme } }) =>
      theme === themeList.light ? "#ffffff" : "rgba(10, 17, 26, 0.9)"};
    height: 70px;
    transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
    box-shadow: 0px 4px 14px rgb(0 0 0 / 7%);
  }
`;

export const NavLinks = styled(Link)`
  &.active {
    color: #7227f3;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 50px;
  width: 100%;
  z-index: 1;
  right: 0px;
  left: 0px;

  ${devices.smartphone} {
    padding: 0px 25px;
  }

  ${devices.ipads} {
    padding: 0px 25px;
  }

  @media only screen and (min-width: 768px) {
    padding: 0px 50px;
  }

  .menuIcon,
  .closeIcon {
    display: flex;
    align-items: center;
    /* margin-right: -10px; */
    cursor: pointer;
    svg {
      color: ${({ theme: { theme } }) =>
        theme === themeList.light ? "#222B5F" : "#F3F1FE"};
      height: 25px;
      width: 25px;
    }
    &:hover {
      background-color: #8080803b;
      border-radius: 4px;
    }
  }
  .closeIcon {
    position: absolute;
    right: 35px;
    top: 30px;

    svg {
      border-radius: 10px;
      padding: 4px;
      color: #fff;
      background-color: var(--colorMain);
    }
    &:hover {
      background-color: #8080803b;
      svg {
        color: white;
      }
    }
  }
  .navOverlay {
    position: absolute;
    background-color: rgba(255, 255, 255, 0.95);
    height: 100vh;
    width: 100vw;
    opacity: 0.8;
    left: 0;
    top: 0;
  }

  .header {
    &__logo_link {
      display: flex;
      justify-content: space-between;
      flex-direction: row-reverse;
      align-items: center;
      height: 50px;
      width: 100%;
      /* gap: 10px; */

      ${devices.smartphone} {
        flex-direction: row;
      }

      ${devices.ipads} {
        flex-direction: row;
      }

      @media only screen and (max-width: 1024px) {
        flex-direction: row;
      }
    }

    &__logo {
      color: #ffffff;
      justify-content: space-between;
      align-items: center;
      text-decoration: none;
      font-size: 1.5rem;
      font-weight: bold;
      cursor: pointer;
      display: flex;
      width: 100%;
      /* margin-left: 10px; */

      ${devices.smartphone} {
        margin-left: 10px;
      }

      ${devices.ipads} {
        margin-left: 10px;
      }

      @media only screen and (max-width: 1024px) {
        margin-left: 10px;
      }

      .logo {
        &__img {
          height: 35px;
          transition: 0.3s all ease;

          &:hover {
            transform: scale(1.1);
          }
        }

        &__img-profile {
          width: 100%;
          transition: 0.3s all ease;

          &:hover {
            transform: scale(1.1);
          }
        }
      }
    }

    &__item {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      font-size: 13px;
      padding: 0 16px;
      height: 100%;
      width: 100%;
      gap: 8px;

      ${devices.smartphone} {
        font-weight: 500;
        font-size: 14px;
      }

      ${devices.ipads} {
        font-weight: 500;
        font-size: 15px;
      }

      @media only screen and (max-width: 1024px) {
        font-weight: 500;
        font-size: 15px;
      }

      .resume {
        display: flex;
        align-items: center;
        background-color: var(--colorMain);
        border-radius: 6px;
        padding: 8px 16px;
        max-height: 100%;
        cursor: pointer;
        color: #ffffff;
        transition: 0.3s all ease;

        &:hover {
          background-color: #7227f3;
          transform: scale(1.05);
        }
      }

      .text_menu {
        color: ${({ theme: { theme } }) =>
          theme === themeList.light
            ? "var(--light-text-black)"
            : "var(--dark-text-white)"};
        cursor: pointer;

        .navmenu {
          display: flex;
          flex-direction: row;
          height: 50px;
          align-items: center;
          &:hover {
            color: var(--colorMain);
          }
        }

        width: max-content;
        font-weight: 500;

        .active {
          color: var(--colorMain);
        }

        ${devices.smartphone} {
          color: ${({ theme: { theme } }) =>
            theme === themeList.light
              ? "var(--light-text-black)"
              : "var(--dark-text-white)"};
        }

        :hover {
          .megamenu {
            visibility: visible;
            opacity: 1;
            transition: all 0.3s ease;
          }
        }
      }
    }

    &__menu {
      display: flex;
      align-items: center;
      text-align: center;
      list-style: none;
      height: 100%;

      nav.open {
        ${devices.smartphone} {
          box-shadow: -1px 4px 10px 3px rgb(0 0 0 / 16%);
          transform: translateX(0);
        }

        ${devices.ipads} {
          box-shadow: -1px 4px 10px 3px rgb(0 0 0 / 16%);
          transform: translateX(0);
        }

        @media only screen and (max-width: 1024px) {
          box-shadow: -1px 4px 10px 3px rgb(0 0 0 / 16%);
          transform: translateX(0);
        }
      }

      nav {
        ${devices.smartphone} {
          display: flex;
          justify-content: flex-start;
          flex-direction: column;
          background-color: ${({ theme: { theme } }) =>
            theme === themeList.light ? "#ffffff" : "#1a1d29"};
          padding: 50px 0px;
          max-width: 250px;
          overflow: hidden;
          position: fixed;
          height: 100vh;
          z-index: 100;
          width: 90%;
          left: 0;
          top: 0;
          transform: translateX(-100%);
          transition: 0.3s ease-in-out transform;
        }

        ${devices.ipads} {
          display: flex;
          justify-content: flex-start;
          flex-direction: column;
          background-color: ${({ theme: { theme } }) =>
            theme === themeList.light ? "#ffffff" : "#1a1d29"};
          padding: 50px 0px;
          max-width: 250px;
          overflow: hidden;
          position: fixed;
          height: 100vh;
          z-index: 100;
          width: 90%;
          left: 0;
          top: 0;
          transform: translateX(-100%);
          transition: 0.3s ease-in-out transform;
        }

        @media only screen and (max-width: 1024px) {
          display: flex;
          justify-content: flex-start;
          flex-direction: column;
          background-color: ${({ theme: { theme } }) =>
            theme === themeList.light ? "#ffffff" : "#1a1d29"};
          padding: 50px 0px;
          max-width: 250px;
          overflow: scroll;
          position: fixed;
          height: 100vh;
          z-index: 100;
          width: 90%;
          left: 0;
          top: 0;
          transform: translateX(-100%);
          transition: 0.3s ease-in-out transform;
        }

        .bisa {
          display: flex;
          flex-direction: row;
          align-items: center;

          ${devices.smartphone} {
            flex-direction: column;
            /* gap: 20px; */
            padding: 20px;
            align-items: flex-start;
          }

          ${devices.ipads} {
            flex-direction: column;
            /* gap: 20px; */
            padding: 20px;
            align-items: flex-start;
          }

          @media only screen and (max-width: 1024px) {
            flex-direction: column;
            /* gap: 20px; */
            padding: 20px;
            align-items: flex-start;
          }

          li {
            .closing {
              display: flex;
              align-items: center;
            }
          }
        }
      }

      .color_icon {
        display: flex;
        color: ${({ theme: { theme } }) =>
          theme === themeList.light
            ? "var(--light-text-black)"
            : "var(--dark-text-white)"};
        font-size: 10px;

        ${devices.smartphone} {
          display: none;
        }

        ${devices.ipads} {
          display: none;
        }

        @media only screen and (max-width: 1024px) {
          display: none;
        }
      }
    }
  }

  .media_social {
    position: fixed;
    color: #a8b2d1;
    width: 40px;
    bottom: 0px;
    right: auto;
    z-index: 10;
    left: 40px;

    ${devices.smartphone} {
      display: none;
    }

    ${devices.ipads} {
      display: none;
    }

    .item_media {
      display: flex;
      flex-direction: column;
      align-items: center;
      -webkit-box-align: center;
      color: ${({ theme: { theme } }) =>
        theme === themeList.light
          ? "var(--light-text-grey)"
          : "var(--dark-text-white)"};
      list-style: none;
      font-size: 20px;
      padding: 0px;
      margin: 0px;

      .item_li {
        transition: 0.3s all ease;
        padding: 10px;

        &:hover {
          transform: translateY(-5px);
          transition: 0.3s all ease;
          color: #7227f3;
        }
      }

      &::after {
        content: "";
        background-color: ${({ theme: { theme } }) =>
          theme === themeList.light
            ? "var(--light-text-grey)"
            : "var(--dark-text-white)"};
        margin: 0px auto;
        margin-top: 20px;
        display: block;
        height: 90px;
        width: 1px;
      }
    }
  }

  .media_social_right {
    position: fixed;
    color: #a8b2d1;
    width: 40px;
    bottom: 0px;
    right: 40px;
    z-index: 10;
    left: auto;

    ${devices.smartphone} {
      display: none;
    }

    ${devices.ipads} {
      display: none;
    }

    .item_media {
      display: flex;
      flex-direction: column;
      align-items: center;
      -webkit-box-align: center;
      color: ${({ theme: { theme } }) =>
        theme === themeList.light
          ? "var(--light-text-grey)"
          : "var(--dark-text-white)"};
      list-style: none;
      font-size: 20px;
      padding: 0px;
      margin: 0px;

      .item_li {
        transition: 0.3s all ease;
        padding: 10px;

        &:hover {
          transform: translateY(-5px);
          transition: 0.3s all ease;
          color: #7227f3;
        }
      }

      &::after {
        content: "";
        background-color: ${({ theme: { theme } }) =>
          theme === themeList.light
            ? "var(--light-text-grey)"
            : "var(--dark-text-white)"};
        margin: 0px auto;
        margin-top: 20px;
        display: block;
        height: 90px;
        width: 1px;
      }
    }
  }

  .bisa {
    li {
      :last-child {
        .megamenu {
          margin-left: -300px;

          ${devices.smartphone} {
            margin-left: 0px;
          }

          ${devices.ipads} {
            margin-left: 0px;
          }

          @media only screen and (max-width: 1024px) {
            margin-left: 0px;
          }

          ::before {
            left: 200px;
          }
        }
      }
    }
  }
`;
