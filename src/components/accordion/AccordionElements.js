import styled from "styled-components";
import React from "react";
import { FiChevronDown } from "react-icons/fi";
import { devices } from "../../assets/_respondTo";
import { themeList } from "../../config";

const AccordionSite = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 80vh;
  padding: 0px;

  ${devices.screen_large} {
    max-width: 1580px;
    padding: 100px 0;
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
    align-items: center;
    gap: 40px;
  }

  .accordion_bungkus {
    display: flex;
    flex-direction: row;
    padding: 50px 0;
    gap: 40px;

    ${devices.smartphone} {
      flex-direction: column-reverse;
    }

    ${devices.ipads} {
      flex-direction: column-reverse;
    }

    .pembungkus {
      ${devices.ipads} {
        display: flex;
        align-items: center;
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
    box-shadow: ${({ theme: { theme } }) =>
      theme === themeList.light ? "0 8px 24px rgb(185 185 185 / 25%)" : ""};
    border: 1px solid
      ${({ theme: { theme } }) =>
        theme === themeList.light ? "#969696" : "var(--mediumColor)"};
    background-color: ${({ theme: { theme } }) =>
      theme === themeList.light ? "#fff" : "var(--mediumColor)"};
    height: max-content;
    margin-bottom: 20px;
    border-radius: 8px;
    width: 500px;

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
`;

const Inner = styled.div`
  position: absolute;
  padding: 16px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  font-weight: 500;
  padding: 0 16px;
  font-size: 14px;
  cursor: pointer;
  height: 64px;
  width: 100%;
  color: ${(props) =>
    props.isActive
      ? "var(--colorMain);"
      : ({ theme: { theme } }) =>
          theme === themeList.light ? "#000" : "#fff"};
`;

const HeaderIcon = styled.span`
  transform: rotate(${(props) => (props.isActive ? -180 : 0)}deg);
  transition: all 0.2s;
`;

const Content = styled.div`
  transition: height 0.35s;
  position: relative;
  font-weight: 400;
  font-size: 12px;
  overflow: hidden;
  height: ${(props) => {
    const inner = document.getElementById(props.itemName);
    return `${props.isActive && inner ? inner.clientHeight : 0}px`;
  }};
`;

const Gambar = styled.div`
  display: ${(props) => (props.isActive ? "initial" : "none")};
  transition: height 0.35s;
  height: 350px;

  img {
    width: 300px;
  }
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
      <img src={itemImg} alt="item_gambar" />
    </Gambar>
  );
};

export { AccordionContainer, AccordionContent, AccordionSite, AccordionImg };
