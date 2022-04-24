import { CssBaseline } from "@material-ui/core";
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/core/styles";
import React, { useCallback, useMemo } from "react";
import ReactDOM from "react-dom/client";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import AudioPlayerPanel from "./components/AudioPlayer/AudioPlayer";
import LibraryPanel from "./components/LibraryPanel";
import {
  changeTheme,
  GeneralSettings
} from "./slice/settings/generalSettingsSlice";
import store, { persistor, RootState, useAppDispatch } from "./store";
import { StyleApp } from "./styles/style";
import { ThemeEnum, themeFromEnum } from "./theme/Theme";

const show = () => {
  console.log("Button Click");
};

const App: React.FC = (props) => {
  const dispatch = useAppDispatch();
  const themeEnum = useSelector<RootState, GeneralSettings>(
    (state) => state.settings.generalSettings
  ).theme;
  const theme = useMemo(() => themeFromEnum(themeEnum), [themeEnum]);

  const onThemeChange = useCallback(() => {
    dispatch(
      changeTheme(
        themeEnum === ThemeEnum.Light ? ThemeEnum.Dark : ThemeEnum.Light
      )
    );
  }, [themeEnum]);

  return (
    <MaterialThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <CssBaseline>
          <StyleApp>
            {/* <Button onClick={onThemeChange}>
                            ダークモード (撤去予定)
                        </Button> */}
            {/* {props.children} */}
            <AudioPlayerPanel />

            <LibraryPanel />
          </StyleApp>
        </CssBaseline>
      </StyledThemeProvider>
    </MaterialThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
