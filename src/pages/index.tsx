import { Box } from "@mui/material";
import Abilities from "components/Abilities";
import About from "components/About";
import FAQ from "components/FAQ";
import HeroSection from "components/HeroSection";
import Participate from "components/Participate";
import { Layout } from "components/layouts/Layout";

const Index = () => {
  return (
    <Layout>
      <Box>
        <HeroSection />
        <About />
        <Abilities />
        <Participate />
        <FAQ />
      </Box>
    </Layout>
  );
};

export default Index;
