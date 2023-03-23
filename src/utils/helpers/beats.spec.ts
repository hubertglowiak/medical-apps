import { BeatItemType } from "../store/types";
import { arrhythmiaTypesSelect, beatTypeToEnum, parseBeatsWithEnum } from "./beats";

describe("parseBeatsWithEnum", () => {
  test("should parse beats data into API valid data", () => {
    const beatsData: BeatItemType[] = arrhythmiaTypesSelect.map((arrhythmiaType) => ({
      arrhythmiaType,
      indexInSamples: 300
    }));

    const result = parseBeatsWithEnum(beatsData);

    const expectedResult = arrhythmiaTypesSelect.map((arrhythmiaType) => ({
      arrhythmiaType: beatTypeToEnum[arrhythmiaType],
      indexInSamples: 300
    }));

    expect(result).toEqual(expectedResult);
  });
});
