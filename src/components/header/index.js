import React, { useEffect, useRef, useState } from "react";
import { HeaderContainer, HeaderSite } from "./HeaderElements";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { BiCaretDown } from "react-icons/bi";
import styled from "styled-components";
import { devices } from "../../assets/_respondTo";
import { logoAma, logoNew } from "../../assets";
import { NAVLINKS, themeList, ThemeSwitcher } from "../../config";

const ContentDrop = styled.div`
  max-height: 340px;

  .megamenu {
    position: absolute;
    top: 4rem;
    background-color: ${({ theme: { theme } }) =>
      theme === themeList.light ? "#fff" : "#1b1d29"};

    display: flex;
    justify-content: center;
    gap: 40px;
    box-shadow: 0 8px 24px rgb(0 0 0 / 15%);
    border-radius: 10px;
    visibility: hidden;
    opacity: 0;
    margin-left: -200px;

    ::before {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      left: 0;
      right: 0;
      margin: auto;
      top: -20px;
      bottom: auto;
      border: 10px solid transparent;
      border-bottom-color: ${({ theme: { theme } }) =>
        theme === themeList.light ? "var(--colorMain)" : "var(--colorMain)"};
    }

    ${devices.smartphone} {
      justify-content: flex-start;
      flex-wrap: wrap;
      position: static;
      box-shadow: none;
      /* visibility: visible; */
      overflow: hidden;
      visibility: visible;
      opacity: 1;
      max-width: 200px;
      margin-left: 0px;
      gap: 20px;
      margin-top: 0px;
      margin-bottom: 0px;
      height: ${(props) => {
        return `${props.isDropdown ? "max-content" : "0px"}`;
      }};
      transition: 319px 0.35s;

      ::before {
        content: "";
        display: none;
      }
    }

    ${devices.ipads} {
      justify-content: flex-start;
      flex-wrap: wrap;
      position: static;
      box-shadow: none;
      /* visibility: visible; */
      overflow: hidden;
      visibility: visible;
      opacity: 1;
      max-width: 200px;
      margin-left: 0px;
      gap: 20px;
      margin-top: 0px;
      margin-bottom: 0px;
      height: ${(props) => {
        return `${props.isDropdown ? "max-content" : "0px"}`;
      }};
      transition: 319px 0.35s;

      ::before {
        content: "";
        display: none;
      }
    }

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      justify-content: flex-start;
      flex-wrap: wrap;
      position: static;
      box-shadow: none;
      /* visibility: visible; */
      overflow: hidden;
      visibility: visible;
      opacity: 1;
      max-width: 200px;
      margin-left: 0px;
      gap: 20px;
      margin-top: 0px;
      margin-bottom: 0px;
      height: ${(props) => {
        return `${props.isDropdown ? "max-content" : "0px"}`;
      }};
      transition: 319px 0.35s;

      ::before {
        content: "";
        display: none;
      }
    }
  }

  .content_name {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 20px;
    align-items: flex-start;

    ${devices.smartphone} {
      padding: 4px 20px;

      border-left: 1px solid
        ${({ theme: { theme } }) =>
          theme === themeList.light ? "#00000030" : "#bfbfbf5e"};
    }

    ${devices.ipads} {
      padding: 4px 20px;
      border-left: 1px solid
        ${({ theme: { theme } }) =>
          theme === themeList.light ? "#00000030" : "#bfbfbf5e"};
    }

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      padding: 4px 20px;
      border-left: 1px solid
        ${({ theme: { theme } }) =>
          theme === themeList.light ? "#00000030" : "#bfbfbf5e"};
    }

    li:first-child {
      align-items: flex-start;
      text-align: left;

      ::after {
        content: "";
        border-bottom: 1px solid #ababab;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 150px;
        margin-top: 8px;

        ${devices.smartphone} {
          border-left: 1px solid #ababab;
          border-bottom: 0px solid #ababab;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 150px;
          margin-top: 8px;
          content: "";
        }

        ${devices.ipads} {
          border-left: 1px solid #ababab;
          border-bottom: 0px solid #ababab;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 150px;
          margin-top: 8px;
          content: "";
        }

        @media only screen and (min-width: 768px) and (max-width: 1024px) {
          border-left: 1px solid #ababab;
          border-bottom: 0px solid #ababab;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 150px;
          margin-top: 8px;
          content: "";
        }
      }
    }

    .megamenu_item {
      font-size: 13px;
      font-weight: 400;
      text-align: left;
    }

    .header_megamenu {
      font-weight: 600;
      text-transform: uppercase;
      text-align: left;
    }
  }

  .megamenu_link {
    a:hover {
      color: var(--colorMain);
    }
  }

  .drop {
    ${devices.smartphone} {
      height: 100%;
      transition: 0.3s ease-in-out;
    }
  }
`;
const Header = () => {
  const headerRef = useRef(null);
  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  const [dropdown, setDropdown] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 1024px)").matches
  );

  const humberHandle = (item) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsNavOpen(false);
    window.location.reload(item.to);
  };

  const humberHandleDisable = (item) => {
    item.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsNavOpen(false);
    window.location.reload(item.to);
  };

  const humberHandle2 = (item) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setDropdown(item.name === dropdown ? null : item.name);
  };

  useEffect(() => {
    function disableScroll() {
      document.body.style.overflow = "hidden";
    }
    function enableScroll() {
      document.body.style.overflow = "";
    }

    if (isNavOpen) {
      disableScroll();
    } else {
      enableScroll();
    }
  }, [isNavOpen]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.matchMedia("(max-width: 1024px)").matches);
    });
  }, []);

  return (
    <HeaderSite ref={headerRef}>
      <HeaderContainer>
        <div className="header__logo_link">
          <div className="header__menu">
            <nav className={isMobile && isNavOpen ? "open" : undefined}>
              {isMobile && (
                <div
                  className="closeIcon"
                  tabIndex="0"
                  role="button"
                  onKeyDown={() => setIsNavOpen(false)}
                  onClick={() => setIsNavOpen(false)}
                >
                  <FiX />
                </div>
              )}
              <ul className="bisa">
                {NAVLINKS.map((item, i) => {
                  let isDropdown = dropdown === item.name;
                  return (
                    <li key={i}>
                      <div className="closing">
                        <div className="header__item">
                          <div className="text_menu">
                            {item.megamenu === false ? (
                              item.disabled === true ? (
                                <NavLink
                                  className="navmenu"
                                  onClick={() => humberHandleDisable()}
                                  to={item.to}
                                >
                                  {item.name}
                                </NavLink>
                              ) : (
                                <NavLink
                                  className="navmenu"
                                  onClick={() => humberHandle()}
                                  to={item.to}
                                >
                                  {item.name}
                                </NavLink>
                              )
                            ) : (
                              <>
                                <NavLink
                                  className="navmenu"
                                  onClick={() => humberHandle2(item)}
                                  to={item.to}
                                >
                                  {item.name} <BiCaretDown />
                                </NavLink>
                                <ContentDrop
                                  isDropdown={isDropdown}
                                  itemName={item.name}
                                >
                                  <div className="megamenu">
                                    {item.megamenuItem &&
                                      item.megamenuItem.map((itemMega, i) => (
                                        <ul key={i} className="content_name">
                                          <li className="megamenu_item header_megamenu">
                                            {itemMega.name}
                                          </li>
                                          {itemMega.sub &&
                                            itemMega.sub.map((itemnya, i) => (
                                              <li
                                                key={i}
                                                className="megamenu_item"
                                              >
                                                <div className="megamenu_link">
                                                  <a
                                                    className="link"
                                                    href={`${itemnya.to}`}
                                                  >
                                                    {itemnya.judul}
                                                  </a>
                                                </div>
                                              </li>
                                            ))}
                                        </ul>
                                      ))}
                                  </div>
                                </ContentDrop>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {isNavOpen && (
              <div
                className="navOverlay"
                tabIndex="0"
                aria-label="overlay"
                role="button"
                onKeyDown={() => setIsNavOpen(false)}
                onClick={() => setIsNavOpen(false)}
              />
            )}
          </div>
          {isMobile && (
            <div
              className="menuIcon"
              tabIndex="0"
              role="button"
              onKeyDown={() => setIsNavOpen(true)}
              onClick={() => setIsNavOpen(true)}
            >
              <FiMenu />
            </div>
          )}
          <div className="header__logo">
            <NavLink
              to="/"
              style={({ isActive }) => {
                return { color: isActive ? "red" : "grey" };
              }}
            >
              <img alt="logoNew" src={logoAma} className="logo__img" />
            </NavLink>
            <ThemeSwitcher />
          </div>
        </div>
      </HeaderContainer>
    </HeaderSite>
  );
};

export const Header404 = () => {
  const headerRef = useRef(null);
  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  return (
    <HeaderSite ref={headerRef}>
      <HeaderContainer>
        <div initial="hidden" animate="visible" className="header__logo_link">
          <div className="header__logo">
            <NavLink
              to="/"
              style={({ isActive }) => {
                return { color: isActive ? "red" : "grey" };
              }}
            >
              <img alt="logoNew" src={logoNew} className="logo__img" />
            </NavLink>
            <ThemeSwitcher />
          </div>
        </div>
      </HeaderContainer>
    </HeaderSite>
  );
};

export default Header;
