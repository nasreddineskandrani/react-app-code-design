import React, { useEffect, useState } from "react";
// import Plot from 'react-plotly.js';
import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);
 
export default function ChartHistory(props: any) {
  const [config, setConfig] = useState({} as any);

  useEffect(() => {
    if (props && props.items && props.items.length > 0) {
      setConfig({
          data: [
            {
              x: props.items.map((v: any) => v.date),
              y: props.items.map((v: any) => v.cash),
              type: "scatter",
              mode: "markers"
            }
          ],
          layout: {
            // title: "A Fancy Plot",
            height: "100%",
            xaxis: {
              type: "date",
              range: [props.startDate, props.endDate]
            }
          }
        });
    }
  }, [props.items, props.startDate, props.endDate]);

  return (
    <div>
      <Plot
        data={ config.data }
        layout={ config.layout }
      />
    </div>
  );
}
