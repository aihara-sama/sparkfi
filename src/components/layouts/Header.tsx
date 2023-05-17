import { Box, Typography } from "@mui/material";
import FancyButton from "components/common/FancyButton";
import Logo from "components/common/Logo";
import { useRouter } from "next/router";

interface IMenuItem {
  text: string;
  link: string;
}
const menu: IMenuItem[] = [
  {
    text: "Swap",
    link: "/swap",
  },
  {
    text: "Liquidity",
    link: "/liquidity",
  },
  {
    text: "Pools",
    link: "/pools",
  },
  {
    text: "Stake & Farm",
    link: "/stake-farm",
  },
  {
    text: "Launchpad",
    link: "/launchpad",
  },
  {
    text: "DAO Governance",
    link: "/dao-governace",
  },
];

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
            {menu.find((el) => el.link === router.route)?.text}
          </Typography>
        )}
      </Box>
      {router.asPath === "/" && <FancyButton expanded>Launch App</FancyButton>}
      {router.asPath !== "/" && (
        <FancyButton expanded>Connect Wallet</FancyButton>
      )}
    </Box>
  );
};
