import { useAtom } from "jotai";
import React, { useEffect } from "react";
import SmartChartHistory from "../+shared/chart-history/smart-chart-history.component";
import { getSales } from "../../../api/fake-api";
import { countAtom } from "../../../app.atoms";
import { SalesContext } from "./sales-lazy.route";

export default function Sales() {
  console.log("render Sales");
  const [count, setCount] = useAtom(countAtom)
  
  useEffect(() => {
    setCount(count + 1);
  }, []);

  return (
    <div>
      <h1>Sales</h1>{count}
      <hr />
      <SmartChartHistory
        id={"sales"}
        fetchData={getSales}
        context={SalesContext}
      />
    </div>
  );
}
