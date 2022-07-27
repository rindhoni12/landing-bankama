import { GlobalStyles, ThemeContext } from "../config/index";
import { ThemeProvider } from "styled-components";
import { RouteSite } from "./route";
import { useContext } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <BrowserRouter basename="web-landing">
      <ThemeProvider theme={{ theme }}>
        <GlobalStyles />
        <RouteSite />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
