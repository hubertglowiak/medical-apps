import { Button } from "antd";
import { ButtonProps as AntButtonProps } from "antd";
import styled from "styled-components";

export type StyledButtonProps = AntButtonProps & {
  padding?: string;
  margin?: string;
};

export const ButtonWrapper = styled(Button)<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};

  span {
    display: inline-flex;
    align-items: center;
  }

  path {
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    fill: ${({ disabled, type, theme }) => {
      if (disabled) {
        return theme.text.disabled;
      }

      if (type === "primary") {
        return theme.common.white;
      }
    }};
  }

  :hover,
  :focus {
    path {
      fill: ${({ disabled, type, theme }) => {
        if (!disabled && !type) {
          return theme.palette.primary;
        }
      }};
    }
  }
`;

export const ButtonIconWrapper = styled.span`
  margin-right: 10px;
`;
