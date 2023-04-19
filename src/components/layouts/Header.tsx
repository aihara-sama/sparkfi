import { Box } from "@mui/material";
import FancyButton from "components/common/FancyButton";
import Link from "next/link";

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
        bgcolor: "background.default",
      }}
    >
      <Link href="/">
        <img src="/images/logo.svg" alt="logo" />
      </Link>
      <FancyButton>Launch App</FancyButton>
    </Box>
  );
};
