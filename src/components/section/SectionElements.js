import styled from "styled-components";
import { devices } from "../../assets/_respondTo";
import themeList from "../../config/themeList";

export const TentangKamiSite = styled.section`
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
  .tentang {
    &_container {
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

      ${devices.screen_large} {
        padding: 0 100px;
      }
    }

    &_content {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: flex-start;
      justify-content: flex-start;
    }

    &_maps {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 20px;
      width: 100%;

      ${devices.smartphone} {
        flex-direction: column;
      }

      ${devices.ipads} {
        flex-direction: column;
      }

      .maps {
        width: 100%;
        height: 400px;
        overflow: hidden;
        border-radius: 8px;

        iframe {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }

      .contact {
        width: 60%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: flex-start;
        height: 100%;
        align-items: flex-start;

        ${devices.smartphone} {
          width: 100%;
        }

        h1 {
          font-size: 26px;
          font-weight: 500;
        }

        p {
          font-size: 14px;
          font-weight: 300;
          line-height: 1.5;
          text-align: left;
        }
        .no_telp {
          display: flex;
          flex-direction: row;
          gap: 30px;
          align-items: center;

          p {
            display: flex;
            flex-direction: row;
            gap: 10px;
            align-items: center;
            font-weight: 500;
          }
        }
      }
    }

    &_cabang {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 40px;
      align-items: flex-start;

      h1 {
        font-size: 26px;
        font-weight: 500;
        margin-bottom: 20px;
      }

      .cabang_bank {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 40px;
        place-items: flex-start;

        ${devices.smartphone} {
          grid-template-columns: repeat(1, 1fr);
          grid-row-gap: 40px;
        }

        ${devices.ipads} {
          grid-template-columns: repeat(2, 1fr);
          grid-row-gap: 40px;
        }

        @media only screen and (min-width: 600px) and (max-width: 660px) {
          grid-template-columns: repeat(1, 1fr);
          grid-row-gap: 40px;
        }

        @media only screen and (min-width: 768px) and (max-width: 1024px) {
          grid-template-columns: repeat(2, 1fr);
          grid-row-gap: 40px;
        }

        .cabang_content {
          display: flex;
          flex-direction: column;
          gap: 20px;
          align-items: flex-start;

          h1 {
            font-size: 18px;
            font-weight: 500;
            margin-bottom: 10px;
          }

          p {
            font-size: 13px;
            font-weight: 300;
            line-height: 1.5;
            text-align: left;
          }
          .no_telp {
            display: flex;
            flex-direction: row;
            gap: 30px;
            align-items: center;

            p {
              display: flex;
              flex-direction: row;
              gap: 10px;
              align-items: center;
              font-weight: 500;
            }
          }
        }
      }
    }
  }
`;

export const OrganisasiSite = styled.section`
  ${devices.smartphone} {
    padding: 50px 0;
  }

  ${devices.ipads} {
    padding: 25px 0;
  }

  ${devices.laptops} {
    padding: 35px 0;
  }

  ${devices.screen_large} {
    padding: 100px 0;
    max-width: 1580px;
  }
  .organisasi {
    &_container {
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

      ${devices.screen_large} {
        padding: 0 100px;
      }
    }

    &_content {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    &_page {
      display: flex;
      flex-direction: column;
      gap: 20px;

      .button_organisasi {
        display: flex;
        flex-direction: row;
        gap: 30px;
        justify-content: flex-start;
        align-items: center;

        ${devices.smartphone} {
          gap: 20px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }

        @media only screen and (min-width: 580px) and (max-width: 780px) {
          gap: 20px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }
      }

      .card_organisasi {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 20px;

        ${devices.smartphone} {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          place-items: center;
        }

        ${devices.ipads} {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          place-items: center;
        }

        ${devices.laptops} {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          place-items: center;
        }

        @media only screen and (min-width: 768px) {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          place-items: center;
        }

        .padding {
          padding: 0px;
        }

        .card_component {
          background-color: ${({ theme: { theme } }) =>
            theme === themeList.light
              ? "var(--light-background)"
              : "var(--dark-background)"};
          max-width: 320px;
          height: auto;
          border-radius: 20px;
          color: #000;
          padding: 1rem;
          overflow: hidden;

          ${devices.smartphone} {
            padding: 2px;
          }

          ${devices.ipads} {
            padding: 2px;
          }

          .gambar_img {
            padding: 10px;
            overflow: hidden;
            transition: all 0.3s ease-in-out;
            border-radius: 50%;

            button {
              background: transparent;
              cursor: pointer;
              border-radius: 50%;
            }

            img {
              object-fit: cover;
              width: 100%;
              height: 100%;
            }
          }
          .text_nama {
            display: flex;
            flex-direction: column;
            gap: 10px;

            span {
              font-size: 18px;
              font-weight: 600;
              color: ${({ theme: { theme } }) =>
                theme === themeList.light
                  ? "var(--lightText)"
                  : "var(--darkText)"};
            }

            p {
              font-size: 12px;
              font-weight: 300;
              color: ${({ theme: { theme } }) =>
                theme === themeList.light
                  ? "var(--lightText)"
                  : "var(--darkText)"};
            }
          }
        }
      }
    }

    &_download {
      font-size: 13px;
      font-weight: 400;

      background-color: ${({ theme: { theme } }) =>
        theme === themeList.light ? "#f4f4f4" : "var(--mediumColor)"};

      padding: 8px 15px;
      border-radius: 8px;
      width: max-content;
      color: var(--colorMain);
      margin: auto;
      margin-top: 60px;
      a:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const LayananSite = styled.section`
  ${devices.smartphone} {
    padding: 50px 0;
  }

  ${devices.ipads} {
    padding: 25px 0;
  }

  ${devices.laptops} {
    padding: 35px 0;
  }

  ${devices.screen_large} {
    padding: 100px 0;
    max-width: 1580px;
  }
  .layanan {
    &_container {
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

      ${devices.screen_large} {
        padding: 0 100px;
      }
    }

    &_content {
      display: flex;
      flex-direction: column;
      gap: 20;
      align-items: center;
      justify-content: center;
    }

    &_tabs {
      width: 100%;
      height: max-content;
      /* background: #fff; */

      background-color: ${({ theme: { theme } }) =>
        theme === themeList.light ? "#fff" : "var(--mediumColor)"};
      border: 1px solid
        ${({ theme: { theme } }) =>
          theme === themeList.light ? "#bdbdbd" : "var(--mediumColor)"};
      box-sizing: border-box;
      border-radius: 20px;
      width: 100%;

      .content {
        display: flex;
        flex-direction: column;
        padding: 20px;

        padding-top: 30px;
      }
    }
  }
`;

export const Tabs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  .tabs {
    &_button {
      display: flex;
      flex-direction: row;

      ${devices.smartphone} {
        flex-direction: column;
        gap: 10px;
      }
    }

    &_nav {
      padding: 16px 32px;
      text-transform: capitalize;
      font-size: 16px;
      font-weight: 500;
      letter-spacing: 0.5px;
      background-color: #efefef;
      color: #828282;
      border-radius: 0px;
      transition: all 0.3s ease-in-out;

      .button {
        text-decoration: none;
        cursor: pointer;
        color: unset;
        font-size: 16px;
        font-weight: 600;
        background-color: transparent;
      }

      :hover {
        color: var(--colorMain);
      }

      :first-child {
        border-radius: 8px 0px 0px 8px;
      }
      :last-child {
        border-radius: 0px 8px 8px 0px;
      }

      ${devices.smartphone} {
        :first-child {
          border-radius: 8px 8px 0px 0px;
        }
        :last-child {
          border-radius: 0px 0px 8px 8px;
        }
      }
    }

    &_content {
      display: inline;
      /* transition: all 4s ease-in-out; */
      .fade {
        display: block;
      }
    }
  }

  .active {
    padding-top: 30px;
    margin-top: -15px !important;
    color: #fff;
    background-color: var(--colorMain);
    border-radius: 8px 8px 0px 0px;
    transition: all 0.3s ease-in-out;

    .button {
      text-decoration: none;
      cursor: pointer;
      color: unset;
      font-size: 16px;
      font-weight: 600;
      background-color: transparent;
    }

    :hover {
      color: #fff;
    }

    :first-child {
      border-radius: 8px 8px 0px 8px;
    }
    :last-child {
      border-radius: 8px 8px 8px 0px;
    }

    ${devices.smartphone} {
      :first-child {
        border-radius: 8px 8px 0px 0px;
      }
      :last-child {
        border-radius: 8px 8px 8px 8px;
      }
    }
  }
  .text {
    transition: all 3s ease-in-out;
  }
`;

export const ContentTabSite = styled.div`
  .tab_content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    padding: 10px;

    .judul {
      font-size: 32px;
      font-weight: 600;

      ${devices.smartphone} {
        text-align: left;
      }
    }

    .value {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: flex-start;
      width: 100%;

      ${devices.smartphone} {
        text-align: left;
      }

      ${devices.ipads} {
        text-align: left;
      }

      ${devices.laptops} {
        text-align: left;
      }

      h1 {
        font-size: 24px;
        font-weight: 500;

        ${devices.smartphone} {
          font-size: 20px;
        }
      }

      p {
        font-weight: 14px;
        font-weight: 300;
        line-height: 1.5;
      }
    }
    .value_b {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }

    .value_all {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 14px;

      h1 {
        font-size: 18px;
        font-weight: 500;
      }

      p {
        font-size: 14px;
        line-height: 1.5;

        ${devices.ipads} {
          text-align: left;
        }
      }
      ol {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-left: 40px;
        list-style-type: decimal;

        li {
          font-size: 14px;
          font-weight: 300;
          line-height: 1.5;
          display: list-item;
          list-style: decimal;
          text-align: left;
        }
      }
    }

    .button_download {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 100%;

      .card_download {
        border-radius: 10px;
        border: 1px solid #b8b8b8;
        padding: 20px 20px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        color: #b8b8b8;

        :hover {
          border: 1px solid var(--colorMain);
          color: var(--colorMain);
        }

        ${devices.smartphone} {
          flex-direction: column;
          align-items: flex-start;
          gap: 20px;
        }

        .text_download {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;

          h1 {
            font-size: 16px;
          }

          p {
            font-size: 12px;
            font-weight: 300;
          }
        }
      }
    }
  }
`;

export const ErrorSite = styled.section`
  .error {
    &_container {
      padding: 0 100px;

      ${devices.smartphone} {
        padding: 0 25px;
      }

      ${devices.ipads} {
        padding: 0 25px;
      }

      ${devices.laptops} {
        padding: 0 35px;
      }
    }

    &_content {
      display: flex;
      flex-direction: column;
      gap: 30px;
      align-items: center;
      justify-content: center;

      .angka {
        font-size: 160px;
        font-weight: 500;

        ${devices.smartphone} {
          font-size: 100px;
        }

        ${devices.ipads} {
          font-size: 100px;
        }

        ${devices.laptops} {
          padding: 0 130px;
        }

        b {
          color: var(--colorMain);
        }
      }
      .text {
        font-size: 26px;
        font-weight: 500;

        ${devices.smartphone} {
          font-size: 18px;
        }

        ${devices.ipads} {
          font-size: 18px;
        }

        ${devices.laptops} {
          font-size: 24px;
        }
      }
    }
  }
`;

export const HubungiSite = styled.section`
  ${devices.smartphone} {
    padding: 50px 0;
  }

  ${devices.ipads} {
    padding: 25px 0;
  }

  ${devices.laptops} {
    padding: 35px 0;
  }

  ${devices.screen_large} {
    padding: 100px 0;
    max-width: 1580px;
  }
  .hubungi {
    &_container {
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

      ${devices.screen_large} {
        padding: 0 100px;
      }
    }
  }
`;

export const CardInformasiSite = styled.section`
  ${devices.smartphone} {
    padding: 50px 0;
  }

  ${devices.ipads} {
    padding: 25px 0;
  }

  ${devices.laptops} {
    padding: 35px 0;
  }

  ${devices.screen_large} {
    padding: 100px 0;
    max-width: 1580px;
  }

  .informasi {
    &_container {
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

      ${devices.screen_large} {
        padding: 0 100px;
      }
    }

    &_content {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    &_card_content {
      display: grid;
      grid-template-columns: repeat(2, auto);
      gap: 20px;

      ${devices.smartphone} {
        grid-template-columns: repeat(1, auto);
      }

      ${devices.ipads} {
        grid-template-columns: repeat(1, auto);
      }

      ${devices.laptops} {
        grid-template-columns: repeat(1, auto);
      }

      .card_content {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 20px;
        align-items: center;
        width: 100%;
        justify-content: flex-start;

        height: max-content;
        background-color: ${({ theme: { theme } }) =>
          theme === themeList.light ? "#fff" : "var(--mediumColor)"};
        border: 1px solid
          ${({ theme: { theme } }) =>
            theme === themeList.light ? "#bdbdbd" : "var(--mediumColor)"};
        box-sizing: border-box;
        border-radius: 10px;
        transition: box-shadow 1s;
        height: 450px;

        ${devices.smartphone} {
          width: 100% !important;
          overflow-x: auto;
        }

        ${devices.ipads} {
          width: 100% !important;
          overflow-x: auto;
        }

        ${devices.laptops} {
          width: 100% !important;
          overflow-x: auto;
        }

        :hover {
          border: 1px solid var(--colorMain);
          box-shadow: 0 0 10px rgb(0 0 0 / 15%);
        }
      }

      .heading {
        font-size: 16px;
        font-weight: 500;
        text-align: left;
        width: 100%;
      }

      .body {
        width: 100%;
      }

      .footer {
        font-size: 12px;
        font-weight: 400;
        text-align: left;
        width: 100%;
        margin-top: 20px;
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

        .text {
          font-size: 12px;
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
        text-align: center;
      }

      :nth-child(1) {
        text-align: left;

        ${devices.smartphone} {
          text-align: left;
        }
      }
    }
  }
`;
