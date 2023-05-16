import { Box } from "@mui/material";
import type { FunctionComponent } from "react";

interface ILinkProps {
  text: string;
  link: string;
  isActive: boolean;
}

const MenuLink: FunctionComponent<ILinkProps> = ({ text, isActive }) => {
  return (
    <Box
      sx={{
        color: isActive ? "#fff" : "#3A3E5C",
        fontWeight: isActive ? "bold" : 500,
      }}
    >
      {text}
    </Box>
  );
};

export default MenuLink;
