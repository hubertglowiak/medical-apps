import create from "zustand";

import { StoreState } from "./types";

export const useStore = create<StoreState>((set) => ({
  beats: [],
  criticalData: [],
  addBeat: (beat) => set((state) => ({ beats: [...state.beats, beat] })),
  clearBeats: () => set(() => ({ beats: [] })),
  updateBeatArrhythmiaType: (index, value) =>
    set((state) => ({
      beats: state.beats.map((beat, beatIndex) => {
        if (index === beatIndex) {
          return {
            ...beat,
            arrhythmiaType: value
          };
        }

        return beat;
      })
    })),
  updateBeatLengthInSamples: (index, value) =>
    set((state) => ({
      beats: state.beats.map((beat, beatIndex) => {
        if (index === beatIndex) {
          return {
            ...beat,
            indexInSamples: value
          };
        }

        return beat;
      })
    })),
  removeBeat: (index) => set((state) => ({ beats: state.beats.filter((_, beatIndex) => beatIndex !== index) })),
  setCriticalData: (criticalData) => set(() => ({ criticalData: criticalData })),
  clearCriticalData: () => set(() => ({ criticalData: [] }))
}));
