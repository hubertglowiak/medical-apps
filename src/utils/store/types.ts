export type ArrhythmiaType = "N" | "VT" | "AST" | "SVT" | "BRD" | "AF" | "T";

export type BeatItemType = {
  indexInSamples: number;
  arrhythmiaType: ArrhythmiaType;
};

export type CriticalItemType = {
  startIndexInSample: number;
  endIndexInSample: number;
};

export type StoreState = {
  beats: BeatItemType[];
  criticalData: CriticalItemType[];
  addBeat: (beat: BeatItemType) => void;
  clearBeats: () => void;
  updateBeatArrhythmiaType: (index: number, value: ArrhythmiaType) => void;
  updateBeatLengthInSamples: (index: number, value: number) => void;
  removeBeat: (index: number) => void;
  setCriticalData: (beat: CriticalItemType[]) => void;
  clearCriticalData: () => void;
};
