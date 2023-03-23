import React, { FC, memo, PropsWithChildren } from "react";

import { ContentWrapper } from "./content.style";

export const Content: FC<PropsWithChildren> = memo(({ children }) => <ContentWrapper>{children}</ContentWrapper>);
