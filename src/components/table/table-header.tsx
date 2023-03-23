import React, { FC, memo, PropsWithChildren } from "react";

import { TableHeaderLabel, TableHeaderWrapper } from "./table-header.style";

type TableHeaderProps = PropsWithChildren & {
  header: string;
};

export const TableHeader: FC<TableHeaderProps> = memo(({ header, children }) => {
  return (
    <TableHeaderWrapper>
      <TableHeaderLabel>{header}</TableHeaderLabel>
      {children}
    </TableHeaderWrapper>
  );
});
