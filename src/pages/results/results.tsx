import React, { FC, useMemo } from "react";

import { ReactComponent as ClearIcon } from "../../assets/icons/ico_clear.svg";
import { Button } from "../../components/button";
import { Table, TableHeader } from "../../components/table";
import { RowItemType } from "../../components/table/table";
import { useBeats } from "../../utils/hooks/use-beats";

export const tableColumns: string[] = ["Start index", "End index"];

export const Results: FC = () => {
  const { onClearBeatsHandler, clearBeatsDisabled, criticalData } = useBeats();

  const tableRows: RowItemType[] = useMemo(() => {
    return criticalData.map((critical, index) => ({
      id: index,
      cols: [critical.startIndexInSample, critical.endIndexInSample]
    }));
  }, [criticalData]);

  return (
    <>
      <TableHeader header="Critical list">
        <Button
          id="clear_table"
          label="Clear table"
          icon={<ClearIcon />}
          onClick={onClearBeatsHandler}
          disabled={clearBeatsDisabled}
        />
      </TableHeader>
      <Table
        rows={tableRows}
        columns={tableColumns}
        tableId="beats_list"
        noDataMessage={`There are no criticals.\n Go to "Beats and annotations creator" to add beats.`}
      />
    </>
  );
};
