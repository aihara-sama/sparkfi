import { Box, Typography } from "@mui/material";
import FancyButton from "components/common/FancyButton";
import Logo from "components/common/Logo";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();

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
      <Box display="flex" alignItems="center">
        <Logo />
        {router.asPath !== "/" && (
          <Typography ml={{ xs: "20px", md: "110px", fontWeight: "bold" }}>
            Swap
          </Typography>
        )}
      </Box>
      {router.asPath === "/" && <FancyButton>Launch App</FancyButton>}
      {router.asPath !== "/" && <FancyButton>Connect Wallet</FancyButton>}
    </Box>
  );
};
