import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Button, Hidden, IconButton } from "@mui/material";
import { LanguageToggle } from "components/common/LanguageToggle";
import { Logo } from "components/common/Logo";
import MobileNavbarDrawer from "components/common/MobileNavbarDrawer";
import { ThemeToggle } from "components/common/ThemeToggle";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const { t } = useTranslation("common");
  const [isAuthenticated] = useState(true); // TO DO

  const [isMobileNavbarDrawerOpen, setIsMobileNavbarDrawerOpen] =
    useState<boolean>(false);

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
        <LanguageToggle />
        <ThemeToggle />
        {isAuthenticated ? (
          <Button variant="text">{t("Logout")}</Button>
        ) : (
          <Button variant="text" component={Link} href="/login">
            {t("Login")}
          </Button>
        )}

        <Hidden smUp>
          <IconButton
            sx={{ px: 0 }}
            onClick={() => setIsMobileNavbarDrawerOpen((prev) => !prev)}
          >
            {!isMobileNavbarDrawerOpen ? (
              <MenuIcon fontSize="large" />
            ) : (
              <CloseIcon fontSize="large" />
            )}
          </IconButton>
        </Hidden>
      </Box>
      <MobileNavbarDrawer
        isDrawer={isMobileNavbarDrawerOpen}
        setIsDrawer={setIsMobileNavbarDrawerOpen}
      />
    </Box>
  );
};
