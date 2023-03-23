import React, { FC, memo, PropsWithChildren } from "react";

import { ContainerWrapper } from "./container.style";

export const Container: FC<PropsWithChildren> = memo(({ children }) => <ContainerWrapper>{children}</ContainerWrapper>);
