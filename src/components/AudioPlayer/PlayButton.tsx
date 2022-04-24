import { IconButton, Tooltip } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import React from "react";

interface Props {
  onClick?: () => void;
}

const PlayButton: React.FC<Props> = (props) => {
  return (
    <Tooltip title="Play">
      <IconButton edge={"end"} onClick={props.onClick}>
        <PlayArrowIcon fontSize={"large"} />
      </IconButton>
    </Tooltip>
  );
};

export default PlayButton;
