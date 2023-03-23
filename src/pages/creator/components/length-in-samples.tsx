import { InputNumber } from "antd";
import React, { FC, memo, useCallback, useState } from "react";

import { Button } from "../../../components/button";
import { useStore } from "../../../utils/store";
import { EditModeWrapper, NonEditModeWrapper } from "./length-in-samples.style";

type LengthInSamplesProps = {
  index: number;
  value: number;
};

export const LengthInSamples: FC<LengthInSamplesProps> = memo(({ index, value }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [inputValue, setInputValue] = useState<number>(value);

  const { updateBeatLengthInSamples } = useStore();

  const onInputChangeHandler = useCallback((value: number | null) => {
    setInputValue(value || 0);
  }, []);

  const onSetEditModeHandler = useCallback(() => {
    setIsEditMode(true);
  }, []);

  const onCancelHandler = useCallback(() => {
    setInputValue(value);
    setIsEditMode(false);
  }, [value]);

  const onSaveHandler = useCallback(() => {
    updateBeatLengthInSamples(index, inputValue);
    setIsEditMode(false);
  }, [inputValue, index]);

  return isEditMode ? (
    <EditModeWrapper id="edit_mode">
      <InputNumber defaultValue={value} onChange={onInputChangeHandler} />
      <Button type="link" label="Save" padding="4px" margin="0 0 0 4px" id={`save_${index}`} onClick={onSaveHandler} />
      <Button type="link" label="Cancel" padding="4px" id={`cancel_${index}`} onClick={onCancelHandler} />
    </EditModeWrapper>
  ) : (
    <NonEditModeWrapper id="non_edit_mode">
      <span>{value}</span>
      <Button
        type="link"
        label="Edit"
        padding="4px"
        margin="0 0 0 4px"
        id={`edit_${index}`}
        onClick={onSetEditModeHandler}
      />
    </NonEditModeWrapper>
  );
});
