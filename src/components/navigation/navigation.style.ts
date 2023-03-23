import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavigationWrapper = styled.nav`
  height: 46px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.border.primary};

  .active {
    font-weight: 600;
    color: ${({ theme }) => theme.palette.primary};
    border-bottom: 2px solid ${({ theme }) => theme.palette.primary};
  }
`;

export const NavigationItemLink = styled(NavLink)`
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  bottom: -1px;
  border-bottom: 2px solid transparent;
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  margin: 0 8px;
  color: ${({ theme }) => theme.text.primary};
`;

export const CriticalDataCount = styled.div`
  padding: 0 3px;
  margin-left: 16px;
  height: 14px;
  min-width: 14px;
  border-radius: 7px;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: red;
  color: white;
`;
