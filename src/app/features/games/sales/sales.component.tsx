import React from "react";
import { useSelector } from "react-redux";
import SmartChartHistory from "../+shared/chart-history/smart-chart-history.component";
import { store } from "../../../..";
import { getSales } from "../../../api/fake-api";
import salesSaga from "./+state/sales.sagas";
import { SalesContext } from "./sales-lazy.route";

store.injectSaga('salesSaga', salesSaga);

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
