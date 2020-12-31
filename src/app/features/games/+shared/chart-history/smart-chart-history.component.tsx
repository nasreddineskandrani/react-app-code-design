import React, { useContext } from "react";
import { useQuery } from "react-query";
import { GamesContext } from "../../games.component";
///
import ChartHistory from "./chart-history.component";

export default function SmartChartHistory(props: any) {
  const [newUploadDoneDate] = useContext(GamesContext);
  const [state, setDates] = useContext(props.context);
  const {
    startDate,
    endDate,
    apiStartDate = startDate,
    apiEndDate = endDate
  } = state;

  // Queries
  const { data, isLoading } = useQuery(
    [props.id, apiStartDate, apiEndDate, newUploadDoneDate],
    () =>
      props.fetchData(apiStartDate, apiEndDate).then((newData: any) => {
        console.log('fetchData done');
        return {
          ...data,
          ...newData,
          data: [...(data?.data || []), ...newData.data]
        };
      }),
      {
        keepPreviousData: true,
        refetchOnWindowFocus: false,
        onSuccess: () => {
          setDates((s: any) => {
            return { ...s, startDate: apiStartDate };
          });
        }
      }
  );

  function addPastData() {
    const endDate_ = new Date(state.startDate);
    const startDate_ = new Date(endDate_);
    startDate_.setDate(startDate_.getDate() - 180);

    setDates((s: any) => ({ ...s, apiStartDate: startDate_, apiEndDate: endDate_ }));
  }

  return (
    <div>
      <ChartHistory
        items={data}
        startDate={state.startDate}
        endDate={state.endDate}
      />

      <button onClick={addPastData}>add past 6 months</button>
    </div>
  );
}
