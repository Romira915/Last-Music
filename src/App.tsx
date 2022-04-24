import { CssBaseline } from "@material-ui/core";
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/core/styles";
import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import AudioPlayerPanel from "./components/AudioPlayer/AudioPlayer";
import LibraryPanel from "./components/LibraryPanel";
import {
  changeTheme,
  GeneralSettings,
} from "./slice/settings/generalSettingsSlice";
import { RootState, useAppDispatch } from "./store";
import { StyleApp } from "./styles/style";
import { ThemeEnum, themeFromEnum } from "./theme/Theme";

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

export default App;
