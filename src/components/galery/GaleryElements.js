import styled from "styled-components";
import { devices } from "../../assets/_respondTo";
// import themeList from "../../config/themeList";

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
