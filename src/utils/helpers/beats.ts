import { ArrhythmiaType, BeatItemType } from "../store/types";

export const defaultBeat: BeatItemType = {
  arrhythmiaType: "N",
  indexInSamples: 300
};

export const arrhythmiaTypesSelect: ArrhythmiaType[] = ["N", "VT", "AST", "BRD", "AF", "T"];

export const beatTypeToEnum: Record<string, number> = {
  N: 0,
  VT: 1,
  AST: 2,
  SVT: 3,
  BRD: 4,
  AF: 5,
  T: 6
};

export const parseBeatsWithEnum = (beats: BeatItemType[]) =>
  beats.map((beat) => ({ ...beat, arrhythmiaType: beatTypeToEnum[beat.arrhythmiaType] }));
