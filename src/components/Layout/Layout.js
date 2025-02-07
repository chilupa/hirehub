import { Container } from "@mui/material";
import React from "react";

const Layout = ({ children }) => {
  return <Container maxWidth="lg">{children}</Container>;
};

export default Layout;
