import { IconButton, Tooltip } from "@material-ui/core";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import React from "react";

interface Props {
  onClick?: () => void;
}

const SkipNextButton: React.FC<Props> = (props) => {
  return (
    <Tooltip title="Next">
      <IconButton onClick={props.onClick}>
        <SkipNextIcon />
      </IconButton>
    </Tooltip>
  );
};

export default SkipNextButton;
