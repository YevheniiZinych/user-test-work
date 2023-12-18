import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { GlobalStyle } from "./GlobalStyle";
import { mainTheme } from "./utils/theme";
import { MainPage } from "./Pages/MainPage/MainPage";
import { register } from "./api/user";
import { asyncWrapper } from "./helpers/asyncWrapper";

function App() {
  useEffect(() => {
    asyncWrapper(register);
  }, []);

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
