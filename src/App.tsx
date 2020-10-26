import * as React from "react";
import { Provider } from "react-redux";
import { ContainerStyled } from "./App.styled";
import Navbar from "./components/Navbar/Navbar";
import Display from "./containers/Display/Display";
import Keyboard, { KeyboardMode } from "./containers/Keyboard/Keyboard";
import configureStore from "./store/store";
import { GlobalStyle } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "./styles/Theme/Light";
import { DarkTheme } from "./styles/Theme/Dark";
import Button from "./components/Button/Button";

const store = configureStore();

const App: React.FC = (): React.ReactElement => {
  const [isLightTheme, setIsLightTheme] = React.useState(true);
  const [theme, setTheme] = React.useState(LightTheme);
  const [isScientificMode, setIsScientificMode] = React.useState(false);

  React.useEffect(() => {
    if (isLightTheme) {
      setTheme(DarkTheme);
    } else {
      setTheme(LightTheme);
    }
  }, [isLightTheme]);

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyle />
        <div className="container-fluid p-0">
          <div className="row mb-5">
            <div className="col">
              <Navbar
                isLightTheme={isLightTheme}
                onToggle={() => setIsLightTheme(!isLightTheme)}
              />
            </div>
          </div>
          <div className="container p-0">
            <div className="row justify-content-end">
              <div className="col-auto mb-4">
                <Button onClick={() => setIsScientificMode(!isScientificMode)}>
                  {isScientificMode ? "Basic Mode" : "Scientific Mode"}
                </Button>
              </div>
            </div>
          </div>
          <ContainerStyled className="container">
            <div className="row">
              <div className="col">
                <Display />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Keyboard
                  mode={
                    isScientificMode
                      ? KeyboardMode.SCIENTIFIC
                      : KeyboardMode.BASIC
                  }
                />
              </div>
            </div>
          </ContainerStyled>
        </div>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
