import React from "react";
import { lazy, createContext, useState } from "react";
import { Route, useRouteMatch } from "react-router-dom";

export const SalesContext = createContext([]);
const LazySales = lazy(() => import("./sales.component"));

function getDefault() {
  let endDate = new Date();
  let startDate = new Date(endDate);
  startDate.setDate(startDate.getDate() - 10);
  return {
    startDate,
    endDate,
    apiStartDate: undefined,
    apiEndDate: undefined
  };
}

const initialDates = getDefault();

export function SalesLazyRoute(props: any) {
  let { path } = useRouteMatch();
  const [state, setDates] = useState({ ...initialDates });
  return (
    <SalesContext.Provider value={[state, setDates] as any}>
      <Route path={`${path}${props.path}`}>
        <LazySales />
      </Route>
    </SalesContext.Provider>
  );
}
