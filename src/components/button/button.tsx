import { ButtonProps as AntButtonProps } from "antd";
import React, { FC, memo } from "react";

import { ButtonIconWrapper, ButtonWrapper } from "./button.style";

export type ButtonProps = AntButtonProps & {
  padding?: string;
  margin?: string;
  label: string;
};

export const Button: FC<ButtonProps> = memo(({ label, icon, ...buttonProps }) => (
  <ButtonWrapper {...buttonProps} icon={icon ? <ButtonIconWrapper>{icon}</ButtonIconWrapper> : null}>
    {label}
  </ButtonWrapper>
));
