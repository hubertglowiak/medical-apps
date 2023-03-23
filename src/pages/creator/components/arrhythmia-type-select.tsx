import { Select } from "antd";
import React, { FC, memo, useCallback } from "react";

import { arrhythmiaTypesSelect } from "../../../utils/helpers/beats";
import { useStore } from "../../../utils/store";
import { ArrhythmiaType } from "../../../utils/store/types";

type ArrhythmiaTypeSelectProps = {
  index: number;
  value: ArrhythmiaType;
};

export const ArrhythmiaTypeSelect: FC<ArrhythmiaTypeSelectProps> = memo(({ index, value }) => {
  const { updateBeatArrhythmiaType } = useStore();

  const onChangeHandler = useCallback((value: ArrhythmiaType) => {
    updateBeatArrhythmiaType(index, value);
  }, []);

  return (
    <Select
      defaultValue={value}
      onChange={onChangeHandler}
      id={`arrhythmia_type_select_${index}`}
      style={{ width: 72 }}
    >
      {arrhythmiaTypesSelect.map((arrhythmiaType) => (
        <Select.Option value={arrhythmiaType} key={arrhythmiaType} id={arrhythmiaType}>
          {arrhythmiaType}
        </Select.Option>
      ))}
    </Select>
  );
});
