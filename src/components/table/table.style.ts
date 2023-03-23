import styled from "styled-components";

type CustomTableProps = {
  rowsLength: number;
};

export const TableWrapper = styled.table<CustomTableProps>`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  margin-bottom: 40px;

  thead {
    height: 55px;
    background: ${({ theme }) => theme.background.secondary};
    color: ${({ theme }) => theme.text.secondary};
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    text-align: left;
  }

  th {
    border: 0.5px solid ${({ theme }) => theme.border.primary};
    padding: 0 16px;
  }

  td {
    border: ${({ theme, rowsLength }) => (rowsLength ? `0.5px solid ${theme.border.primary}` : "none")};
    padding: 0 16px;
  }

  tbody tr {
    height: 65px;
  }
`;

export const TableNoData = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const NoDataMessage = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin-top: 10px;
  text-align: center;
  white-space: pre-line;
  color: ${({ theme }) => theme.text.tertiary};
`;
