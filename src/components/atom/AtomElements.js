import { devices } from "../../assets/_respondTo";
import { themeList } from "../../config";
import { whatsapp } from "../../assets";
import styled from "styled-components";

export const InformasiSite = styled.section`
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
    display: flex;
    flex-direction: row;
    background-color: ${({ theme: { theme } }) =>
      theme === themeList.light ? "#ffefd4" : "var(--mediumColor)"};
    border-radius: 8px;
    padding: 30px;
    width: 100%;
    gap: 20px;

    ${devices.smartphone} {
      flex-direction: column;
      align-items: center;
    }

    @media only screen and (min-width: 540px) and (max-width: 760px) {
      flex-direction: row;
    }

    .img {
      overflow: hidden;
      height: 150px;
      margin: auto;

      img {
        object-fit: contain;
        width: 100%;
        height: 100%;
      }
    }

    &_container {
      padding: 0 100px;

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
  }

  .text_content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    gap: 20px;

    ${devices.smartphone} {
      width: 100%;
    }

    ${devices.ipads} {
      width: 100%;
    }
  }

  .content {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    ${devices.smartphone} {
      width: 100%;
    }

    ${devices.ipads} {
      width: 100%;
    }

    ${devices.laptops} {
      width: 100%;
    }
  }

  .text_p {
    font-weight: 300;
    line-height: 1.8;
    font-size: 14px;
  }
`;

export const CardItemComponents = styled.div`
  .card {
    &_item {
      display: flex;
      position: relative;
      flex-direction: column;
      box-shadow: 0 0 15px rgb(0 0 0 / 10%);
      background-color: ${({ theme: { theme } }) =>
        theme === themeList.light ? "#fff" : "var(--mediumColor)"};
      border: 1px solid transparent;
      background-clip: border-box;
      word-wrap: break-word;
      border-radius: 8px;
      overflow: hidden;
      min-width: 0;
      gap: 10px;

      :hover {
        box-shadow: 0 0 10px rgb(0 0 0 / 15%);
        border: 1px solid var(--colorMain);
      }
    }
    &_img {
      position: relative;
      object-fit: cover;
      width: 100%;
      height: 150px;

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }

    &_body {
      text-align: left;
      padding: 1.25rem;
      min-height: 1px;
      flex: 1 1 auto;
      height: 200px;

      h3 {
        margin-bottom: 10px;
        font-weight: 500;
        font-size: 15px;
      }

      .berita_text {
        text-overflow: ellipsis;
        line-height: 1.45;
        font-weight: 300;
        overflow: hidden;
        font-size: 13px;
        display: -webkit-box;
        -webkit-line-clamp: 5; /* number of lines to show */
        -webkit-box-orient: vertical;
      }
    }

    &_footer {
      padding: 20px 1.25rem;
      text-align: left;
      font-weight: 400;
      font-size: 12px;
      background-color: ${({ theme: { theme } }) =>
        theme === themeList.light ? "#f8f9fa" : "#282d34"};
    }
  }
`;

export const CardComponents = styled.section`
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

  .card_container {
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
      padding: 0px 100px;
    }
  }

  .heading {
    display: flex;
    flex-direction: column;
    padding: 40px 0px;
    text-align: left;
    width: 80%;
    gap: 20px;

    h2 {
      font-weight: 600;
      font-size: 42px;
    }

    p {
      font-weight: 400;
      line-height: 1.5;
      font-size: 16px;
    }
  }
`;

export const DetailComponents = styled.section`
  padding: 50px 0;

  ${devices.smartphone} {
    padding: 20px 0;
  }

  ${devices.ipads} {
    padding: 25px 0;
  }

  ${devices.laptops} {
    padding: 35px 0;
  }

  ${devices.screen_large} {
    max-width: 1580px;
    padding: 100px 0;
  }

  .detail {
    &_container {
      padding: 0 100px;

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
    &_content {
      display: flex;
      flex-direction: row;
      gap: 20px;

      ${devices.smartphone} {
        flex-direction: column;
      }

      ${devices.ipads} {
        flex-direction: column;
      }
    }

    &_img {
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      padding: 10px;
      width: 50%;
      max-height: 350px;

      &_loading {
        img {
          width: auto !important;
          height: auto !important;
          border-radius: 10px;
          object-fit: cover;
        }

        ${devices.smartphone} {
          width: 100%;
        }

        ${devices.ipads} {
          width: 100%;
        }

        ${devices.laptops} {
          height: 100%;
        }
      }

      img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        object-fit: cover;
      }

      ${devices.smartphone} {
        width: 100%;
      }

      ${devices.ipads} {
        width: 100%;
      }

      ${devices.laptops} {
        height: 100%;
      }
    }

    &_text {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: flex-start;
      padding: 10px;
      width: 50%;
      gap: 40px;

      ${devices.smartphone} {
        width: 100%;
      }

      ${devices.ipads} {
        width: 100%;
      }

      .visi_misi {
        display: flex;
        flex-direction: column;
        text-align: left;
        gap: 10px;
      }

      &_heading {
        font-weight: 500;
        font-size: 26px;
      }

      &_p {
        font-weight: 300;
        line-height: 1.5;
        font-size: 14px;
      }
    }
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
`;

export const OjkComponents = styled.section`
  padding: 50px 0;

  ${devices.smartphone} {
    padding: 20px 0;
  }

  ${devices.ipads} {
    padding: 25px 0;
  }

  ${devices.laptops} {
    padding: 35px 0;
  }

  ${devices.screen_large} {
    max-width: 1580px;
    padding: 100px 0;
  }

  .ojk {
    &_container {
      padding: 0 100px;

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

    &_content {
      display: grid;
      grid-template-columns: repeat(3, auto);
      align-items: center;
      width: 100%;
      gap: 20px;

      @media only screen and (min-width: 480px) and (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    &_img {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      overflow: hidden;
      width: 100%;

      ${devices.smartphone} {
        display: flex !important;
        height: 20vh;
      }

      img {
        width: 150px;

        ${devices.smartphone} {
          width: 250px !important;
          object-fit: contain;
        }
      }
    }

    &_content_slide {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 100px;
      flex-direction: column;

      .mitra {
        width: 100%;
        margin: auto;
        font-size: 20px;
        font-weight: 500;
      }
    }
  }
`;

export const SlideContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;

  .slide_content {
    display: flex !important;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 8px;
    height: 120px;
  }

  .ojk_img {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    overflow: hidden;
    width: 100%;

    ${devices.smartphone} {
      display: flex !important;
      height: 20vh;
    }

    img {
      width: 150px;

      ${devices.smartphone} {
        width: 200px !important;
        object-fit: contain;
      }
    }
  }
`;

export const HeadingContent = styled.div`
  width: 100%;
  z-index: 2;

  .heading {
    display: flex;
    flex-direction: column;
    padding: 40px 0px;
    text-align: left;
    width: 80%;
    gap: 20px;

    ${devices.smartphone} {
      padding: 30px 0px;
      width: 100%;
    }

    ${devices.ipads} {
      width: 100%;
    }

    h2 {
      font-size: 42px;
      font-weight: 600;

      ${devices.smartphone} {
        font-size: 30px;
      }
    }

    p {
      line-height: 1.5;
      font-weight: 300;
      font-size: 16px;
    }
  }
`;

export const FocusComponentSite = styled.section`
  padding: 100px 0px;
  max-width: 100%;

  ${devices.smartphone} {
    padding: 50px 0;
  }

  .focus_container {
    background-color: aliceblue;
    padding: 0;

    .gambar_bg,
    .gambar_bg_new {
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      place-items: center;
      overflow: hidden;
      display: grid;
      height: 380px;
    }

    .gambar_bg_tentang {
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      place-items: center;
      display: flex;
      flex-direction: row;
      overflow: hidden;
      padding: 0 25px;
      height: 380px;
      gap: 20px;

      .gambar_img {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        padding: 30px;
        height: 100%;
        width: 100%;

        img {
          object-fit: contain;
        }
      }
    }

    .class_tambahan {
      position: absolute;
      z-index: 1;
      opacity: 0.3;

      img {
        --size: 145px;
        width: var(--size);
        position: absolute;
        right: 420px;
        top: 10px;

        :first-child {
          left: 420px;
          top: -140px;
        }

        ${devices.smartphone} {
          right: 40px;
          top: 10px;
          opacity: 0.3;

          :first-child {
            left: 50px;
            top: -140px;
          }
        }

        ${devices.ipads} {
          right: 150px;
          top: 10px;
          opacity: 0.3;

          :first-child {
            left: 150px;
            top: -140px;
          }
        }

        ${devices.laptops} {
          right: 250px;
          top: 10px;
          opacity: 0.3;

          :first-child {
            left: 250px;
            top: -140px;
          }
        }
      }
    }
  }
`;

export const FocusComponentSiteContact = styled.section`
  max-width: 100%;
  padding: 0;

  ${devices.smartphone} {
    padding: 0px 0;
  }

  .focus_container {
    background-color: aliceblue;
    padding: 0;

    .gambar_bg_tentang {
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      place-items: center;
      overflow: hidden;
      display: flex;
      flex-direction: row;
      padding: 0 50px;
      height: 380px;
      gap: 20px;

      img {
        width: 100%;
        height: 100%;
      }

      ${devices.smartphone} {
        flex-direction: column-reverse;
        padding: 0 25px;
        height: 450px;
        gap: 0px;
      }

      ${devices.ipads} {
        flex-direction: column-reverse;
        padding: 0 25px;
        height: 450px;
        gap: 0px;
      }

      .gambar_img {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        padding: 30px;
        height: 100%;
        width: 100%;

        ${devices.smartphone} {
          margin-top: 35px;
          padding: 0;
        }

        ${devices.ipads} {
          margin-top: 35px;
          padding: 0;
        }

        img {
          object-fit: contain;
          width: 100%;
          height: 100%;
        }
      }
    }

    .backgroud_class {
      /* height: 540px; */
      width: 100%;
      overflow: hidden;

      ${devices.smartphone} {
        height: 100%;
      }
      img {
        height: 100%;
        width: 100%;
        object-position: bottom;
        object-fit: cover;
      }
    }
  }
`;

export const OrganisasiSite = styled.div`
  display: grid;
  place-items: center;

  .informasi {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .gambar_img {
    overflow: hidden;
    max-width: 280px;
    padding: 10px;

    img {
      object-fit: cover;
    }
  }

  .text_nama {
    display: flex;
    flex-direction: column;
    gap: 10px;

    h1 {
      font-weight: 600;
      font-size: 18px;
    }

    p {
      font-weight: 300;
      font-size: 12px;
    }
  }
`;

export const WaItemSite = styled.div`
  .wa {
    &_content {
      position: fixed;
      background: #1bd741aa;
      border-radius: 50px;
      text-align: right;
      overflow: hidden;
      bottom: 15px;
      width: 150px;
      height: 50px;
      right: 15px;
      z-index: 99;
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;

      a {
        display: flex;
        align-items: center;
        height: 50px;
        width: 100%;
      }
    }

    &_text {
      display: inline-block;
      color: ${({ theme: { theme } }) =>
        theme === themeList.light ? "#fff" : "#000"};
      letter-spacing: 0.2px;
      padding-left: 20px;
      text-align: center;
      line-height: 1.2;
      background: 0 0;
      font-size: 10px;
      width: 90px;
    }

    &_icon {
      display: inline-block;
      background: url(${whatsapp}) #1bd741 center center no-repeat;
      background-size: 90%;
      border-radius: 50px;
      margin-left: auto;
      height: 50px;
      width: 50px;
    }
  }
`;

export const BeritaContent = styled.div`
  .card_content {
    display: grid;
    justify-content: center;
    align-items: flex-start;
    grid-template-columns: repeat(3, 1fr);
    transition: all 0.35s ease-in-out;
    height: 100%;
    gap: 30px;

    ${devices.smartphone} {
      grid-template-columns: repeat(1, 1fr);
    }

    @media only screen and (min-width: 560px) and (max-width: 760px) {
      grid-template-columns: repeat(2, 1fr);
    }

    ${devices.ipads} {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
