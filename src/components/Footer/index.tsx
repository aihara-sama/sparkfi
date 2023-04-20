import { Box, Typography } from "@mui/material";
import Logo from "components/common/Logo";
import DiscordIcon from "components/icons/social/DiscordIcon";
import GitbookIcon from "components/icons/social/GitbookIcon";
import GithubIcon from "components/icons/social/GithubIcon";
import MediumIcon from "components/icons/social/MediumIcon";
import TelegramIcon from "components/icons/social/TelegramIcon";
import TwitterIcon from "components/icons/social/TwitterIcon";
import type { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  return (
    <Box
      sx={{ backgroundColor: "#000" }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      pt="57px"
      pb="116px"
      gap="32px"
    >
      <Logo />
      <Box display="flex" gap="32px">
        <TwitterIcon />
        <TelegramIcon />
        <DiscordIcon />
        <GithubIcon />
        <GitbookIcon />
        <MediumIcon />
      </Box>
      <Typography fontWeight={500}>
        Copyright © 2023 SparkFi. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
