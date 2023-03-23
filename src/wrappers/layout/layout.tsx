import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Container } from "../../components/container";
import { Content } from "../../components/content";
import { Footer } from "../../components/footer";
import { Navigation } from "../../components/navigation";
import { GlobalStyles, theme } from "../../utils/theme";

export const Layout: FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Navigation />
    <Content>
      <Container>
        <Outlet />
      </Container>
    </Content>
    <Footer />
  </ThemeProvider>
);
