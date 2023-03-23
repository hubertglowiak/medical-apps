import React, { FC, useMemo } from "react";

import { ReactComponent as AddIcon } from "../../assets/icons/ico_add.svg";
import { ReactComponent as ClearIcon } from "../../assets/icons/ico_clear.svg";
import { ReactComponent as GenerateIcon } from "../../assets/icons/ico_generate-results.svg";
import { Button } from "../../components/button";
import { Table, TableHeader } from "../../components/table";
import { RowItemType } from "../../components/table/table";
import { useBeats } from "../../utils/hooks/use-beats";
import { ArrhythmiaTypeSelect } from "./components/arrhythmia-type-select";
import { LengthInSamples } from "./components/length-in-samples";
import { RemoveButton } from "./components/remove-button";
import { ButtonsWrapper } from "./creator.style";

export const tableColumns: string[] = ["Length in samples", "Beat type", "Actions"];

export const Creator: FC = () => {
  const {
    beats,
    isLoading,
    onAddBeatHandler,
    onClearBeatsHandler,
    onRemoveBeatHandler,
    onGenerateResultsHandler,
    addBeatDisabled,
    clearBeatsDisabled,
    generateResultsDisabled
  } = useBeats();

  const tableRows: RowItemType[] = useMemo(() => {
    return beats.map((beat, index) => ({
      id: index,
      cols: [
        <LengthInSamples value={beat.indexInSamples} index={index} key={index} />,
        <ArrhythmiaTypeSelect value={beat.arrhythmiaType} index={index} key={index} />,
        <RemoveButton index={index} key={index} onClick={onRemoveBeatHandler} />
      ]
    }));
  }, [beats]);

  return (
    <>
      <TableHeader header="Beats list">
        <ButtonsWrapper>
          <Button
            id="add_beat"
            icon={<AddIcon />}
            label="Add beat"
            onClick={onAddBeatHandler}
            disabled={addBeatDisabled}
          />
          <Button
            id="clear_table"
            label="Clear table"
            icon={<ClearIcon />}
            onClick={onClearBeatsHandler}
            disabled={clearBeatsDisabled}
          />
          <Button
            id="generate_results"
            icon={<GenerateIcon />}
            label="Generate results"
            type="primary"
            loading={isLoading}
            onClick={onGenerateResultsHandler}
            disabled={generateResultsDisabled}
          />
        </ButtonsWrapper>
      </TableHeader>
      <Table
        rows={tableRows}
        columns={tableColumns}
        tableId="beats_list"
        noDataMessage={`There are no beats to show.\n To add beats, click the "Add beat" button.`}
      />
    </>
  );
};
