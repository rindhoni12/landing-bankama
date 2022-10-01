import styled from "styled-components";
import { FiX } from "react-icons/fi";
import { devices } from "../../assets/_respondTo";
import { themeList } from "../../config";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  top: 0;
  margin-top: auto;
  margin-bottom: auto;
  ${devices.smartphone} {
    padding: 0px 50px;
  }
`;

export const ModalWrapper = styled.div`
  width: 500px;
  height: 400px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  /* display: flex; */
  position: relative;
  z-index: 10;
  border-radius: 10px;
  padding: 40px;

  ${devices.laptops} {
    height: 300px;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #141414;
  gap: 20px;
  height: 100%;
  width: 100%;
  .pembungkus {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 20px;
    align-items: center;

    .circle {
      padding: 0px;
    }

    .images_content {
      --size: 200px;
      width: var(--size);
      height: var(--size);
      margin-top: -100px;
      transition: cubic-bezier(0.075, 0.82, 0.165, 1);

      img {
        width: 100%;
        height: 100%;
      }
    }

    .gambar_img {
      /* padding: 10px; */
      overflow: hidden;
      /* transition: all 0.3s ease-in-out; */
      border-radius: 50%;
      transition: cubic-bezier(0.075, 0.82, 0.165, 1);

      button {
        background: transparent;
        cursor: pointer;
        border-radius: 50%;
      }

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        margin-bottom: -4px;
      }
    }
  }
  .heading {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    ${devices.laptops} {
      overflow: scroll;
    }
    .judul {
      font-size: 16px;
      font-weight: 500;
    }
    p {
      font-size: 12px;
      font-weight: 300;
      line-height: 1.5;
      text-align: justify;
      color: ${({ theme: { theme } }) =>
        theme === themeList.light ? "#000" : "#000"};
    }
  }
  .content_form {
    display: flex;
    gap: 10px;
    flex-direction: column;
    width: 100%;
    .form {
      display: flex;
      flex-direction: column;
      gap: 10px;
      .text_form {
        font-size: 13px;
        font-weight: 400;
      }

      .text_form_judul {
        font-size: 18px;
        font-weight: 600;
      }

      .input_form {
        border: 0.5px rgba(0, 0, 0, 0.5) solid;
        border-radius: 4px;
        padding: 10px;
        height: 40px;
        font-size: 14px;
        &:focus {
          outline: none;
          border: 1px solid #0f8af9;
        }
      }
    }
  }
`;

export const CloseModalButton = styled(FiX)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 18px;
  height: 18px;
  padding: 0;
  z-index: 10;
`;

export const ButtonModal = styled.button`
  min-width: 100px;
  padding: 12px 32px;
  border-radius: 4px;
  border: none;
  background: #0f8af9;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  width: 100%;
  box-shadow: rgb(2 12 27 / 70%) 0px 10px 30px -15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  &:hover {
    background: #2276c2;
  }
  svg {
    ${devices.smartphone} {
      display: none;
    }
  }
`;
