import React, { useEffect, useState } from "react";

export default function ChartHistory(props: any) {
  /*
  useEffect(() => {
    console.log("On Init", props);
  }, []);
  */

  useEffect(() => {
    // console.log("On Changes", props);
    const chartDiv = document.getElementById("chart");
          /*
    if (props.items && props.items.data && props.items.data.length > 0) {
      Plotly.newPlot(
        chartDiv,
        [
          {
            x: props.items.data.map(v => v.date),
            y: props.items.data.map(v => v.cash),
            type: "scatter",
            mode: "markers"
          }
        ],
        {
          // title: "A Fancy Plot",
          height: "100%",
          xaxis: {
            type: "date",
            range: [props.startDate, props.endDate]
          }
        },
        {
          responsive: true
        }
      );
    }
    */
  }, [props.items]);

  return (
    <div>
      <div id="chart" />
    </div>
  );
}
