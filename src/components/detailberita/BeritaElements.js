import styled from "styled-components";
import { devices } from "../../assets/_respondTo";

export const DetailBeritaSite = styled.section`
  padding: 40px 0;

  ${devices.screen_large} {
    padding: 100px 0;
    max-width: 1580px;
  }

  .berita {
    &_container {
      padding: 0 200px;

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
        padding: 0 200px;
      }
    }

    &_content {
      display: flex;
      flex-direction: column;
      gap: 40px;
      align-items: flex-start;
      justify-content: flex-start;
    }

    &_breadcrum {
      display: flex;
      flex-direction: row;
      gap: 10px;
      width: 100%;

      .breadcrum {
        display: flex;
        flex-direction: row;

        .breadcrum_item {
          font-size: 13px;
          font-weight: 300;

          a {
            :hover {
              color: var(--colorMain);
            }
          }

          :after {
            margin: auto 0.75rem;
            width: 4px;
            height: 4px;
            content: ">";
            color: var(--colorMain);
          }

          :last-child {
            ::after {
              margin: auto 0.75rem;
              width: 4px;
              height: 4px;
              content: "";
              color: #1d639d;
              display: none;
            }
          }
        }
      }
    }

    &_judul {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: flex-start;

      .judul {
        font-size: 26px;
        font-weight: 500;
      }
      p {
        font-size: 12px;
        font-weight: 300;
      }
    }

    &_full {
      display: flex;
      flex-direction: column;
      gap: 40px;
      align-items: flex-start;
      justify-content: flex-start;

      .berita_text {
        font-size: 14px;
        line-height: 1.5;
        font-weight: 300;
        text-align: left;
      }
    }

    &_gambar {
      overflow: hidden;
      border-radius: 10px;
      object-fit: contain;

      img {
        object-fit: contain;
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export const DetailSupportSite = styled.section`
  padding: 40px 0;

  ${devices.screen_large} {
    padding: 100px 0;
    max-width: 1580px;
  }

  .support {
    &_container {
      padding: 0 200px;

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
        padding: 0 200px;
      }
    }

    &_content {
      display: flex;
      flex-direction: column;
      gap: 40px;
      align-items: flex-start;
      justify-content: flex-start;
    }

    &_breadcrum {
      display: flex;
      flex-direction: row;
      gap: 10px;
      width: 100%;

      .breadcrum {
        display: flex;
        flex-direction: row;

        .breadcrum_item {
          font-size: 13px;
          font-weight: 300;

          a {
            :hover {
              color: var(--colorMain);
            }
          }

          :after {
            margin: auto 0.75rem;
            width: 4px;
            height: 4px;
            content: ">";
            color: var(--colorMain);
          }

          :last-child {
            ::after {
              margin: auto 0.75rem;
              width: 4px;
              height: 4px;
              content: "";
              color: #1d639d;
              display: none;
            }
          }
        }
      }
    }

    &_judul {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: flex-start;

      .judul {
        font-size: 26px;
        font-weight: 500;
      }
      p {
        font-size: 12px;
        font-weight: 300;
      }
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
`;
