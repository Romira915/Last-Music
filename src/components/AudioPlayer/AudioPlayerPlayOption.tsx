import React from "react";
import { Grid } from "@material-ui/core";
import { StyleAudioPlayerPlayOptionGroup } from "../../styles/style";
import RepeatButton from "./RepeatButton";
import ShuffleButton from "./ShuffleButton";

interface Props {}

const AudioPlayerPlayOption: React.FC<Props> = (props) => {
  return (
    <StyleAudioPlayerPlayOptionGroup>
      <Grid container direction={"row"} alignItems={"center"}>
        <Grid item>
          <RepeatButton
          // doneTODO 後でプレイヤーと同期
          />
        </Grid>
        <Grid item>
          <ShuffleButton />
        </Grid>
      </Grid>
    </StyleAudioPlayerPlayOptionGroup>
  );
};

export default AudioPlayerPlayOption;
