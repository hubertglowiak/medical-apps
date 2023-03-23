import { useMemo } from "react";

import { useStore } from "../../../utils/store";
import { ArrhythmiaType } from "../../../utils/store/types";

export type BeatConfigItemType = {
  index: number;
  label: string;
  width: string;
  arrhythmiaType: ArrhythmiaType;
};

export const useBeatsBar = () => {
  const { beats } = useStore();

  const beatsAvailable = useMemo(() => {
    return Boolean(beats.length);
  }, [beats]);

  const beatsSum = useMemo(() => {
    return beats.map((beat) => beat.indexInSamples).reduce((beat, acc) => beat + acc, 0);
  }, [beats]);

  const beatsConfig: BeatConfigItemType[] = useMemo(() => {
    return beats.map((beat, index) => ({
      index,
      arrhythmiaType: beat.arrhythmiaType,
      label: `${beat.arrhythmiaType} (${beat.indexInSamples})`,
      width: `${(beat.indexInSamples / beatsSum) * 100}%`
    }));
  }, [beats, beatsSum]);

  return { beatsAvailable, beatsConfig };
};
