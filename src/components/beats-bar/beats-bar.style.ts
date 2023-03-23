import styled from "styled-components";

import { ArrhythmiaType } from "../../utils/store/types";

export const BeatsWrapper = styled.footer`
  width: 100%;
  height: 64px;
`;

export const NoBeatsData = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.border.secondary};
  background: ${({ theme }) => theme.background.primary};
`;

export const BeatsData = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

type BeatConfigItemProps = {
  width: string;
  arrhythmiaType: ArrhythmiaType;
};

export const BeatConfigItem = styled.div<BeatConfigItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ arrhythmiaType, theme }) => theme.beats[arrhythmiaType].background};
  border: 1px solid ${({ arrhythmiaType, theme }) => theme.beats[arrhythmiaType].border};
  width: ${({ width }) => width};
  font-weight: 400;
  font-size: 10px;
  line-height: 10px;
  text-align: center;
  overflow: hidden;
`;
