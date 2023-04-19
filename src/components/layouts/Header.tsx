import { Box, Button } from "@mui/material";
import { Logo } from "components/common/Logo";
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
        borderBottom: "1px solid",
        borderColor: "divider",
        position: "sticky",
        top: 0,
        left: 0,
        zIndex: "appBar",
        bgcolor: "background.default",
      }}
    >
      <Link href="/">
        <Logo />
      </Link>
      <Box>
        <Button variant="text" component={Link} href="/login">
          Login
        </Button>
      </Box>
    </Box>
  );
};
