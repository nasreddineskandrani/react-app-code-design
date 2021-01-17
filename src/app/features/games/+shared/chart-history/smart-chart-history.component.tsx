import React, { useContext, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGamesHistoryPerId, getRange } from "../../+state/games.selectors";
import { GamesContext } from "../../games.component";
import { AddPastGameHistory, InitGameHistory } from "./+state/chart-history.actions";
import ChartHistory from "./chart-history.component";
///

export default function SmartChartHistory(props: any) {
  const dispatch = useDispatch();

  const range = useSelector(state =>
    getRange(state, props.id),
    /*
    (range: any) => {
      console.log('this is a kinda map :)', range);
      return range;
    }*/
  );

  const data = useSelector(state =>
    getGamesHistoryPerId(state, props.id)
  )

  useEffect(() => {
    if (!range.startDate) {
      dispatch(InitGameHistory({id: props.id}));
    }
  }, []);

  function addPastData() {
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
