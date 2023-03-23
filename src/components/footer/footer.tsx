import React, { FC } from "react";

import { BeatsBar } from "../beats-bar";
import { Container } from "../container";
import { FooterWrapper } from "./footer.style";

export const Footer: FC = () => (
  <FooterWrapper>
    <Container>
      <BeatsBar />
    </Container>
  </FooterWrapper>
);
