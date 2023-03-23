import React, { FC, memo, ReactNode } from "react";

import { ReactComponent as EmptyDataIcon } from "../../assets/icons/ico_empty-data.svg";
import { NoDataMessage, TableNoData, TableWrapper } from "./table.style";

export type RowItemType = {
  id: number;
  cols: ReactNode[];
};

type TableProps = {
  tableId: string;
  noDataMessage: string;
  columns: string[];
  rows: RowItemType[];
};

export const Table: FC<TableProps> = memo(({ tableId, columns, rows, noDataMessage }) => {
  return (
    <TableWrapper id={tableId} rowsLength={rows.length}>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.length ? (
          rows.map((row) => (
            <tr key={row.id} id={`${tableId}_row_${row.id}`}>
              {row.cols.map((col, index) => (
                <td key={index} id={`${tableId}_row=${row.id}_col=${index}`}>
                  {col}
                </td>
              ))}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={columns.length}>
              <TableNoData id="no_data">
                <EmptyDataIcon />
                <NoDataMessage id="no_data_message">{noDataMessage}</NoDataMessage>
              </TableNoData>
            </td>
          </tr>
        )}
      </tbody>
    </TableWrapper>
  );
});
