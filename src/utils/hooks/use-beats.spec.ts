import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import { StoreState } from "../store/types";
import { useBeats } from "./use-beats";

const addBeatMock = jest.fn();
const removeBeatMock = jest.fn();
const clearBeatsMock = jest.fn();
const clearCriticalDataMock = jest.fn();

const useStoreMock: Partial<StoreState> = {
  beats: [],
  criticalData: [],
  addBeat: () => addBeatMock(),
  removeBeat: (id) => removeBeatMock(id),
  clearBeats: () => clearBeatsMock(),
  clearCriticalData: () => clearCriticalDataMock()
};

jest.mock("../store", () => ({
  useStore: () => {
    return useStoreMock;
  }
}));

jest.mock("../api", () => ({
  axios: () => ({})
}));

describe("useBeats", () => {
  test("should check disabled buttons when beats are empty", () => {
    const hook = renderHook(() => useBeats());

    expect(hook.result.current.addBeatDisabled).toEqual(false);
    expect(hook.result.current.generateResultsDisabled).toEqual(true);
    expect(hook.result.current.clearBeatsDisabled).toEqual(true);
  });

  test("should check enabled buttons when beats critical data is available", () => {
    useStoreMock.beats = [
      { arrhythmiaType: "N", indexInSamples: 300 },
      { arrhythmiaType: "N", indexInSamples: 300 }
    ];

    useStoreMock.criticalData = [{ startIndexInSample: 300, endIndexInSample: 600 }];

    const hook = renderHook(() => useBeats());

    expect(hook.result.current.addBeatDisabled).toEqual(true);
    expect(hook.result.current.generateResultsDisabled).toEqual(true);
    expect(hook.result.current.clearBeatsDisabled).toEqual(false);
  });

  test("should handle onAddBeatHandler", () => {
    const hook = renderHook(() => useBeats());

    act(() => {
      hook.result.current.onAddBeatHandler();
    });

    expect(addBeatMock).toHaveBeenCalledTimes(1);
  });

  test("should handle onRemoveBeatHandler", () => {
    const hook = renderHook(() => useBeats());

    act(() => {
      hook.result.current.onRemoveBeatHandler(5);
    });

    expect(removeBeatMock).toHaveBeenCalledWith(5);
  });

  test("should handle onClearBeatsHandler", () => {
    const hook = renderHook(() => useBeats());

    act(() => {
      hook.result.current.onClearBeatsHandler();
    });

    expect(clearBeatsMock).toHaveBeenCalledTimes(1);
    expect(clearCriticalDataMock).toHaveBeenCalledTimes(1);
  });
});
