import React, { FC, memo, useCallback } from "react";

import { Button } from "../../../components/button";

type RemoveButtonProps = {
  index: number;
  onClick: (index: number) => void;
};

export const RemoveButton: FC<RemoveButtonProps> = memo(({ index, onClick }) => {
  const onRemoveBeatHandler = useCallback(() => {
    onClick(index);
  }, [onClick, index]);

  return (
    <Button type="link" label="Remove beat" padding="4px 0" id={`remove_beat_${index}`} onClick={onRemoveBeatHandler} />
  );
});
