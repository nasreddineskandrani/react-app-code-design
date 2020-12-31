import React, { useEffect } from "react";
import SmartChartHistory from "../+shared/chart-history/smart-chart-history.component";
import { getSales } from "../../../api/fake-api";
import { SalesContext } from "./sales-lazy.route";

export default function Sales() {
  console.log("render Sales");
  return (
    <div>
      <h1>Sales</h1>
      <hr />
      <SmartChartHistory
        id={"sales"}
        fetchData={getSales}
        context={SalesContext}
      />
    </div>
  );
}
