import styled from "styled-components";
import React from "react";
import { FiChevronDown } from "react-icons/fi";
import { devices } from "../../assets/_respondTo";
import { themeList } from "../../config";

const AccordionSite = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  min-height: 80vh;
  padding: 0px;

  ${devices.screen_large} {
    padding: 100px 0;
    max-width: 1580px;
  }

  .accordion_container {
    padding: 0 100px;
    width: 100%;

    ${devices.smartphone} {
      padding: 0px 25px;
    }

    ${devices.ipads} {
      padding: 0px 50px;
    }

    ${devices.laptops} {
      padding: 0px 50px;
    }

    ${devices.screen_large} {
      padding: 0px 100px;
    }
  }

  .accordion_pembungkus {
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
  }

  .accordion_bungkus {
    display: flex;
    flex-direction: row;
    gap: 40px;
    padding: 50px 0;

    ${devices.smartphone} {
      flex-direction: column-reverse;
    }

    ${devices.ipads} {
      flex-direction: column-reverse;
    }

    .pembungkus {
      ${devices.ipads} {
        align-items: center;
        display: flex;
        flex-direction: column;
      }
      ${devices.laptops} {
        width: 100%;
      }

      ${devices.screen_large} {
        width: 100%;
      }
    }
  }

  .content_accordion {
    margin-bottom: 20px;
    background-color: ${({ theme: { theme } }) =>
      theme === themeList.light ? "#fff" : "var(--mediumColor)"};
    border: 1px solid
      ${({ theme: { theme } }) =>
        theme === themeList.light ? "#969696" : "var(--mediumColor)"};
    border-radius: 8px;
    box-shadow: ${({ theme: { theme } }) =>
      theme === themeList.light ? "0 8px 24px rgb(185 185 185 / 25%)" : ""};
    /* box-shadow: 0 8px 24px rgb(185 185 185 / 25%); */
    width: 500px;
    height: max-content;

    ${devices.smartphone} {
      width: 100%;
    }

    ${devices.laptops} {
      width: 100%;
    }

    ${devices.screen_large} {
      width: 100%;
    }

    &:hover {
      border: 1px solid var(--colorMain);
    }
  }

  .pembungkus_gambar {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

const AccordionContainer = styled.div`
  overflow: hidden;
  /* width: 500px; */
`;

const Inner = styled.div`
  position: absolute;
  padding: 16px;
  /* color: #222; */
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 64px;
  padding: 0 16px;
  font-size: 14px;
  text-align: left;
  cursor: pointer;
  color: ${(props) =>
    props.isActive
      ? "var(--colorMain);"
      : ({ theme: { theme } }) =>
          theme === themeList.light ? "#000" : "#fff"};
  font-weight: 500;
`;

const HeaderIcon = styled.span`
  transform: rotate(${(props) => (props.isActive ? -180 : 0)}deg);
  transition: all 0.2s;
`;

const Content = styled.div`
  position: relative;
  overflow: hidden;
  height: ${(props) => {
    const inner = document.getElementById(props.itemName);
    return `${props.isActive && inner ? inner.clientHeight : 0}px`;
  }};
  transition: height 0.35s;
  font-size: 12px;
  font-weight: 400;
`;

const Gambar = styled.div`
  display: ${(props) => (props.isActive ? "initial" : "none")};
  height: 350px;
  transition: height 0.35s;
`;

const AccordionContent = ({ onClick, itemName, itemContent, isActive }) => {
  return (
    <React.Fragment>
      <div className="content_accordion">
        <Header onClick={onClick} isActive={isActive}>
          {itemName}
          <HeaderIcon isActive={isActive} className="material-icons">
            <FiChevronDown />
          </HeaderIcon>
        </Header>
        <Content itemName={itemName} isActive={isActive}>
          <Inner id={itemName}>{itemContent}</Inner>
        </Content>
      </div>
    </React.Fragment>
  );
};

const AccordionImg = ({ isActive, itemImg }) => {
  return (
    <Gambar isActive={isActive}>
      <img style={{ width: "300px" }} src={itemImg} alt="item_gamnbar" />
    </Gambar>
  );
};

export { AccordionContainer, AccordionContent, AccordionSite, AccordionImg };
