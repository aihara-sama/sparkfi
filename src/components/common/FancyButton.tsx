import type { SxProps } from "@mui/material";
import { Box, Button } from "@mui/material";
import type { FunctionComponent } from "react";

interface IFancyButtonProps {
  children: string | JSX.Element;
  buttonStyles?: SxProps;
}

const FancyButton: FunctionComponent<IFancyButtonProps> = ({
  children,
  buttonStyles,
}) => {
  return (
    <Box display="flex">
      <Box
        sx={{
          background:
            "linear-gradient(90deg, rgb(97, 0, 255) 0%, rgb(244, 12, 193) 100%)",
        }}
        p="1px"
      >
        <Button
          sx={{
            background: (theme) =>
              `${theme.palette.background.default} !important`,
            borderRadius: 0,
            border: "none",
            padding: "10px",
            color: "#fff",
            fontSize: 16,
            lineHeight: 1,
            minWidth: "auto",
            fontWeight: 500,
            ...buttonStyles,
          }}
          variant="text"
        >
          {children}
        </Button>
      </Box>
    </Box>
  );
};

export default FancyButton;
