import { notification } from "antd";
import { createElement, useCallback, useMemo, useState } from "react";

import { ReactComponent as SuccessIcon } from "../../assets/icons/ico_success.svg";
import { axios } from "../api";
import { defaultBeat, parseBeatsWithEnum } from "../helpers/beats";
import { useStore } from "../store";

export const useBeats = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { beats, criticalData, addBeat, clearBeats, setCriticalData, clearCriticalData, removeBeat } = useStore();

  const onAddBeatHandler = useCallback(() => {
    addBeat(defaultBeat);
  }, [addBeat]);

  const onRemoveBeatHandler = useCallback(
    (index: number) => {
      removeBeat(index);
    },
    [removeBeat]
  );

  const onClearBeatsHandler = useCallback(() => {
    clearBeats();
    clearCriticalData();
  }, [clearBeats, clearCriticalData]);

  const onGenerateResultsHandler = useCallback(async () => {
    setIsLoading(true);

    console.log(axios);

    axios
      .post("/annotations", parseBeatsWithEnum(beats))
      .then(({ data }) => {
        setCriticalData(data);

        notification.open({
          icon: createElement(SuccessIcon),
          placement: "bottom",
          message: "Success",
          description: "Go to “Results” tab"
        });
      })
      .catch((error) => {
        notification.open({
          placement: "bottom",
          message: "Error",
          description: error.response.data.Message
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [beats]);

  const clearBeatsDisabled = useMemo(() => {
    return !beats.length;
  }, [beats]);

  const addBeatDisabled = useMemo(() => {
    return Boolean(criticalData.length);
  }, [criticalData]);

  const generateResultsDisabled = useMemo(() => {
    return Boolean(!beats.length || criticalData.length);
  }, [beats]);

  return {
    beats,
    isLoading,
    criticalData,
    onAddBeatHandler,
    onClearBeatsHandler,
    onRemoveBeatHandler,
    onGenerateResultsHandler,
    clearBeatsDisabled,
    addBeatDisabled,
    generateResultsDisabled
  };
};
