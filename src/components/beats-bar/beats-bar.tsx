import React, { FC } from "react";

import { BeatConfigItem, BeatsData, BeatsWrapper, NoBeatsData } from "./beats-bar.style";
import { useBeatsBar } from "./hooks/use-beats-bar";

export const BeatsBar: FC = () => {
  const { beatsAvailable, beatsConfig } = useBeatsBar();

  return (
    <BeatsWrapper>
      {beatsAvailable ? (
        <BeatsData id="beats_data">
          {beatsConfig.map((beatConfigItem, index) => (
            <BeatConfigItem
              id={`beats_data_${index}`}
              key={beatConfigItem.index}
              width={beatConfigItem.width}
              arrhythmiaType={beatConfigItem.arrhythmiaType}
            >
              {beatConfigItem.label}
            </BeatConfigItem>
          ))}
        </BeatsData>
      ) : (
        <NoBeatsData id="no_beats_data">NO BEATS</NoBeatsData>
      )}
    </BeatsWrapper>
  );
};
