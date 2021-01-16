import React, { useContext, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGamesHistoryPerId, getRange } from "../../+state/games.selectors";
import { GamesContext } from "../../games.component";
import { AddPastGameHistory, InitGameHistory } from "./+state/chart-history.actions";
import ChartHistory from "./chart-history.component";
///

export default function SmartChartHistory(props: any) {
  const dispatch = useDispatch();

  const selectRange = useMemo(
    getRange,
    []
  );
  const range = useSelector(state =>
    selectRange(state, props.id),
    /*
    (range: any) => {
      console.log('this is a kinda map :)', range);
      return range;
    }
    */
  );

  const selectNumOfTodosWithIsDone = useMemo(
    getGamesHistoryPerId,
    []
  )
  const data = useSelector(state =>
    selectNumOfTodosWithIsDone(state, props.id)
  )

  useEffect(() => {
    dispatch(InitGameHistory({id: props.id}));
  }, []);

  function addPastData() {
    /*
    const endDate_ = new Date(state.startDate);
    const startDate_ = new Date(endDate_);
    startDate_.setDate(startDate_.getDate() - 180);

    setDates((s: any) => ({ ...s, apiStartDate: startDate_, apiEndDate: endDate_ }));
    */
   dispatch(AddPastGameHistory({ id: props.id }));
  }

  return (
    <div>
      <ChartHistory
        items={data}
        startDate={range.startDate}
        endDate={range.endDate}
      />

      <button onClick={addPastData}>add past 6 months</button>
    </div>
  );
}
