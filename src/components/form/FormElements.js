import styled from "styled-components";
import { devices } from "../../assets/_respondTo";
import themeList from "../../config/themeList";

export const FormSite = styled.section`
  ${devices.smartphone} {
    padding: 50px 0;
  }
  ${devices.ipads} {
    padding: 25px 0;
  }
  ${devices.ipads} {
    padding: 35px 0;
  }
  ${devices.screen_large} {
    padding: 100px 0;
    max-width: 1580px;
  }
  .form_container {
    padding: 0 100px;

    ${devices.smartphone} {
      padding: 0 25px;
    }

    ${devices.ipads} {
      padding: 0 50px;
    }

    ${devices.laptops} {
      padding: 0 50px;
    }
  }

  .heading_form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: left;
    padding: 40px 0px;
    width: 80%;

    h2 {
      font-size: 42px;
      font-weight: 600;
    }

    p {
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
    }
  }

  .form_currency {
    padding: 14px 26px;
    /* border: 1.2px solid #aaa; */

    border: 1px solid
      ${({ theme: { theme } }) =>
        theme === themeList.light ? "#bdbdbd" : "var(--mediumColor)"};
    box-sizing: border-box;
    border-radius: 8px;
    color: #00193e;

    font-size: 16px;
    font-weight: 600;

    ::placeholder {
      color: #aeaeae;
      font-size: 14px;
      font-weight: 300;
      text-transform: capitalize;
    }

    :focus {
      border: 1px solid #aaa;
      outline: none;
    }
  }

  .form_content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: left;

    label {
      font-weight: 500;
      font-size: 16px;
    }
  }

  .content_form {
    display: flex;
    flex-direction: row;
    gap: 20px;
    width: 100%;
  }

  .gambar_pemanis {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 20px;

    img {
      width: 100%;
      height: 100%;
    }

    ${devices.smartphone} {
      display: none;
    }

    ${devices.ipads} {
      display: none;
    }
  }
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  select:required:invalid {
    color: #aeaeae;
    font-size: 14px;
    font-weight: 300;
    text-transform: capitalize;
  }
  option[value=""][disabled] {
    display: none;
  }
  option {
    color: #7227f3;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    /* background: transparent; */
    background-image: url("data:image/svg+xml;utf8,<svg stroke='currentColor' fill='none' stroke-width='2' viewBox='0 0 24 24' stroke-linecap='round' stroke-linejoin='round' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><polyline points='6 9 12 15 18 9'></polyline></svg>");
    background-repeat: no-repeat;
    background-position-x: 97%;
    background-position-y: 15px;
    border-radius: 2px;
    padding: 14px 26px;
    border: 1.2px solid #aaa;
    box-sizing: border-box;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;

    :focus {
      outline: none;
    }
  }

  .button_my-course {
    display: flex;
    align-items: center;
    background-color: var(--colorMain);
    padding: 14px 20px;
    border-radius: 6px;
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
  }

  .card_form {
    height: max-content;
    /* border-radius: 8px; */
    background-color: ${({ theme: { theme } }) =>
      theme === themeList.light ? "#fff" : "var(--mediumColor)"};
    border: 1px solid
      ${({ theme: { theme } }) =>
        theme === themeList.light ? "#bdbdbd" : "var(--mediumColor)"};
    box-sizing: border-box;
    border-radius: 20px;
    transition: box-shadow 1s;

    :hover {
      border: 1px solid var(--colorMain);
      box-shadow: 0 0 10px rgb(0 0 0 / 15%);
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px;
    height: 100%;

    p {
      text-align: left;
      font-size: 14px;
      line-height: 1.5;
      font-weight: 300;

      padding-bottom: 10px;
      border-bottom: 1px solid #a5a5a5;
    }

    .text_keterangan {
      text-align: left;

      ul {
        display: flex;
        flex-direction: column;
        gap: 10px;
        font-size: 14px;
        font-weight: 300;

        li {
          display: flex;
          flex-direction: row;

          ${devices.smartphone} {
            flex-direction: column;
            gap: 10px;
          }

          @media only screen and (min-width: 470px) {
            flex-direction: row;
          }

          b {
            font-size: 13px;
            font-weight: 400;
          }

          span {
            font-weight: 500;
          }
        }
      }
    }
  }

  .class_table {
    overflow-x: auto;
    ::-webkit-scrollbar {
      display: none;
    }

    ${devices.smartphone} {
      overflow-x: auto;
    }
  }

  .form_style {
    width: 100%;
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
  }

  .button_flex {
    display: flex;
    gap: 20px;
    align-items: flex-start;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    overflow: hidden;
    border-radius: 8px;
    border: 1px solid #fff;
    ${devices.smartphone} {
      width: 600px;
    }

    thead {
      tr {
        th {
          padding: 0.75rem;
          border: 1px solid
            ${({ theme: { theme } }) =>
              theme === themeList.light
                ? "#fff"
                : "var(--mediumColor)"} !important;
          font-size: 14px;
          font-weight: 400;
          text-align: center;
          color: #fff;
        }
      }
    }
  }

  tbody {
    border: 1px solid #fff;
    font-size: 13px;
    background: #f0f0f0;

    tr:nth-child(even) {
      background: #f7f7f7;
    }

    td {
      border: 1px solid
        ${({ theme: { theme } }) =>
          theme === themeList.light ? "#fff" : "var(--mediumColor)"};
      padding: 0.75rem;
      color: #000;
      line-height: 1.3;
      font-weight: 500;
      text-align: center;

      ${devices.smartphone} {
        text-align: left;
      }

      :nth-child(1) {
        text-align: center;

        ${devices.smartphone} {
          text-align: center;
        }
      }
    }
  }
`;

export const ButtonComponent = styled.div`
  padding: 20px 30px;
  border-radius: 8px;
  background-color: aliceblue;
`;

export const ButtonAll = styled.div`
  display: initial;
  .button_my-course {
    display: flex;
    align-items: center;
    background-color: var(--colorMain);
    padding: 14px 20px;
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
  }
`;

export const ButtonTransparentAll = styled.div`
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
