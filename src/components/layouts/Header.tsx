import { Box } from "@mui/material";
import FancyButton from "components/common/FancyButton";
import Logo from "components/common/Logo";

export const Header = () => {
  return (
    <Box
      component="header"
      sx={{
        height: 60,
        px: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Logo />
      <FancyButton>Launch App</FancyButton>
    </Box>
  );
};
