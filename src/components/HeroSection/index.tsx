import { Box, Typography } from "@mui/material";
import FancyButton from "components/common/FancyButton";
import type { FunctionComponent } from "react";

const HeroSection: FunctionComponent = () => {
  return (
    <Box
      display="flex"
      gap={{ xs: "82px", sm: 5 }}
      mt="144px"
      alignItems="center"
      flexDirection={{ xs: "column", md: "row" }}
    >
      <Box>
        <Typography fontSize={40}>Built to Launch</Typography>
        <Typography
          fontSize={40}
          sx={{
            background:
              "-webkit-linear-gradient(90deg, rgb(97, 0, 255) 0%, rgb(244, 12, 193) 100%);",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
          }}
          fontWeight={500}
        >
          Premier Projects on BASE
        </Typography>
        <Typography mt="39px" mb="56px" fontWeight={500}>
          Participate in the very early stage of projects building on one of the
          world’s highest performance blockchains-BASE.
        </Typography>
        <FancyButton
          buttonStyles={{
            px: "22px",
          }}
        >
          Join Whitelist
        </FancyButton>
      </Box>
      <Box position="relative" mr={{ xs: 0, sm: 3, md: 0 }}>
        <Box
          position="absolute"
          sx={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
            filter: "blur(74px)",
            background:
              "linear-gradient(138deg, rgb(97 0 255), rgb(244 12 193))",
            borderRadius: "50%",
          }}
        ></Box>
        <img src="/images/racket.svg" alt="racket" />
      </Box>
    </Box>
  );
};

export default HeroSection;
