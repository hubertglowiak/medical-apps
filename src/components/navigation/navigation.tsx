import React, { FC } from "react";

import { useStore } from "../../utils/store";
import { CriticalDataCount, NavigationItemLink, NavigationWrapper } from "./navigation.style";

export const Navigation: FC = () => {
  const { criticalData } = useStore();

  return (
    <NavigationWrapper>
      <NavigationItemLink to="/" id="beat_and_annotation_creator">
        Beat and annotation creator
      </NavigationItemLink>
      <NavigationItemLink to="results" id="results">
        <span>Results</span>
        {criticalData.length ? <CriticalDataCount>{criticalData.length}</CriticalDataCount> : null}
      </NavigationItemLink>
    </NavigationWrapper>
  );
};
