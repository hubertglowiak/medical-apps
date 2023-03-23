import styled from "styled-components";

export const TableHeaderWrapper = styled.footer`
  width: 100%;
  margin: 24px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TableHeaderLabel = styled.h1`
  margin-bottom: 0;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: ${({ theme }) => theme.text.secondary};
`;
