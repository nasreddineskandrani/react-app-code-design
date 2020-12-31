import React from "react";
import SmartChartHistory from "../+shared/chart-history/smart-chart-history.component";
import { getConferences } from "../../../api/fake-api";
import { ConferencesContext } from "./conferences-lazy.route";

export default function Conferences() {
  console.log("render Conferences");
  return (
    <div>
      <h1>Conferences</h1>
      <hr />
      <SmartChartHistory
        id={"conferences"}
        fetchData={getConferences}
        context={ConferencesContext}
      />
    </div>
  );
}
