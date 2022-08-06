import styled from "styled-components";
import { devices } from "../../assets/_respondTo";

export const GalerySite = styled.section`
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
  .galery {
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

export const GaleryNewSite = styled.section`
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

  .galeryNew {
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

    &_galery {
      -webkit-column-count: 3;
      -moz-column-count: 3;
      column-count: 3;
      -webkit-column-width: 33%;
      -moz-column-width: 33%;
      column-width: 33%;
      padding: 0 10px;
      row-gap: 10px;
      column-gap: 10px;

      ${devices.smartphone} {
        -webkit-column-count: 2;
        -moz-column-count: 2;
        column-count: 2;
        -webkit-column-width: 100%;
        -moz-column-width: 100%;
        column-width: 100%;
      }

      ${devices.ipads} {
        -webkit-column-count: 2;
        -moz-column-count: 2;
        column-count: 2;
        -webkit-column-width: 100%;
        -moz-column-width: 100%;
        column-width: 100%;
      }

      ${devices.laptops} {
        -webkit-column-count: 2;
        -moz-column-count: 2;
        column-count: 2;
      }

      .pics {
        -webkit-transition: all 350ms ease;
        transition: all 350ms ease;
        cursor: pointer;

        :hover {
          opacity: 0.8;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .modal {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000000d4;
    transition: opacity 0.4s ease, visibility 0.4s ease,
      transform 0.5s ease-in-out;
    visibility: hidden;
    opacity: 0;
    transform: scale(0);
    overflow: hidden;
    z-index: 200;

    img {
      width: auto;
      max-width: 100%;
      height: auto;
      display: block;
      line-height: 0;
      box-sizing: border-box;
      padding: 20px 0 20px;
      margin: 0 auto;

      ${devices.smartphone} {
        padding: 20px 35px 20px;
      }

      ${devices.ipads} {
        padding: 20px 35px 20px;
      }
    }

    svg {
      position: fixed;
      top: 10px;
      right: 10px;
      width: 2rem;
      height: 2rem;
      padding: 5px;
      background-color: #8c8c8c;
      border-radius: 10px;
      color: #fff;
      cursor: pointer;
    }
  }

  .modal.open {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }
`;
