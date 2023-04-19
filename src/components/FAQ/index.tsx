import { Box, Typography } from "@mui/material";
import FancyAccordion from "components/common/FancyAccordion";
import type { FunctionComponent } from "react";

interface IMenuItem {
  text: string;
  body: string;
}
const menu: IMenuItem[] = [
  {
    text: "What is SparkFi?",
    body: "SparkFi is a decentralized finance protocol that allows users to earn interest on their crypto assets.",
  },
  {
    text: "What kind of projects can we expect to see launch on SparkFi?",
    body: "SparkFi is a decentralized finance protocol that allows users to earn interest on their crypto assets.",
  },
  {
    text: "How to participate in IDO?",
    body: "SparkFi is a decentralized finance protocol that allows users to earn interest on their crypto assets.",
  },
  {
    text: "Is SparkFi multichain?",
    body: "SparkFi is a decentralized finance protocol that allows users to earn interest on their crypto assets.",
  },
  {
    text: "When can we claim the IDO tokens?",
    body: "SparkFi is a decentralized finance protocol that allows users to earn interest on their crypto assets.",
  },
  {
    text: "Why Base?",
    body: "SparkFi is a decentralized finance protocol that allows users to earn interest on their crypto assets.",
  },
  {
    text: "Will there be a token? Where can I learn about it if so.",
    body: "SparkFi is a decentralized finance protocol that allows users to earn interest on their crypto assets.",
  },
  {
    text: "How can I contact the team?",
    body: "SparkFi is a decentralized finance protocol that allows users to earn interest on their crypto assets.",
  },
];

const FAQ: FunctionComponent = () => {
  return (
    <Box mt="144px" mb={{ xs: "76px", md: "194px" }}>
      <Box mb="110px">
        <Typography
          fontSize={40}
          textAlign={{ xs: "left", md: "center" }}
          fontWeight={600}
        >
          Frequently Asked Questions
        </Typography>
      </Box>
      <Box>
        <FancyAccordion menu={menu} />
      </Box>
    </Box>
  );
};

export default FAQ;
