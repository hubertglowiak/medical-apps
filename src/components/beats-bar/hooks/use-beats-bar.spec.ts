import { renderHook } from "@testing-library/react";

import { StoreState } from "../../../utils/store/types";
import { BeatConfigItemType, useBeatsBar } from "./use-beats-bar";

const useStoreMock: Partial<StoreState> = {
  beats: []
};

jest.mock("../../../utils/store", () => ({
  useStore: () => {
    return useStoreMock;
  }
}));

describe("useBeatsBar", () => {
  test("should check when beats are empty", () => {
    const hook = renderHook(() => useBeatsBar());

    expect(hook.result.current.beatsAvailable).toEqual(false);
    expect(hook.result.current.beatsConfig).toEqual([]);
  });

  test("should check when beats data is available", () => {
    useStoreMock.beats = [
      { arrhythmiaType: "N", indexInSamples: 300 },
      { arrhythmiaType: "N", indexInSamples: 300 },
      { arrhythmiaType: "AST", indexInSamples: 600 }
    ];

    const hook = renderHook(() => useBeatsBar());

    const expectedBeatsConfig: BeatConfigItemType[] = [
      {
        index: 0,
        width: "25%",
        label: "N (300)",
        arrhythmiaType: "N"
      },
      {
        index: 1,
        width: "25%",
        label: "N (300)",
        arrhythmiaType: "N"
      },
      {
        index: 2,
        width: "50%",
        label: "AST (600)",
        arrhythmiaType: "AST"
      }
    ];

    expect(hook.result.current.beatsAvailable).toEqual(true);
    expect(hook.result.current.beatsConfig).toEqual(expectedBeatsConfig);
  });
});
