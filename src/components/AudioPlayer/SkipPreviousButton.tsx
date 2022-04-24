import { IconButton, Tooltip } from "@material-ui/core";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import React from "react";

interface Props {
  onClick?: () => void;
}

const SkipPreviousButton: React.FC<Props> = (props) => {
  return (
    <Tooltip title="Back">
      <IconButton edge={"end"} onClick={props.onClick}>
        <SkipPreviousIcon />
      </IconButton>
    </Tooltip>
  );
};

export default SkipPreviousButton;
