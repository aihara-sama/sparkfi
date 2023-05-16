import { Box, Container } from "@mui/material";
import type { FC, PropsWithChildren } from "react";

import Footer from "components/Footer";
import { Header } from "./Header";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      sx={
        {
          // backgroundImage: `url(/images/hero.svg)`,
          // backgroundRepeat: "no-repeat",
        }
      }
    >
      <Container maxWidth="xl" sx={{ pt: "26px" }}>
        <Header />
        {/* <Box
          maxWidth="1300px"
          component="section"
          sx={{ height: "calc(100% - 60px)", margin: "0 auto" }}
        >
          {children}
        </Box> */}
        <Container
          component="section"
          sx={{ height: "calc(100% - 60px)", maxWidth: "1300px" }}
        >
          {children}
        </Container>
      </Container>
      <Footer />
    </Box>
  );
};
