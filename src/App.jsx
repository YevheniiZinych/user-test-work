import { ThemeProvider } from "styled-components";
import "./App.css";
import { GlobalStyle } from "./GlobalStyle";
import { mainTheme } from "./utils/theme";
import { MainPage } from "./Pages/MainPage/MainPage";
function App() {
  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <GlobalStyle />
        <MainPage />
      </ThemeProvider>
    </>
  );
}

export default App;
