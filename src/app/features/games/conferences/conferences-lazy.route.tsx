import React from "react";
import { lazy, createContext, useState } from "react";
import { Route, useRouteMatch } from "react-router-dom";

export const ConferencesContext = createContext([]);
const LazyConferences = lazy(() => import("./conferences.component"));

function getDefault() {
  let endDate = new Date();
  let startDate = new Date(endDate);
  startDate.setDate(startDate.getDate() - 20);
  return {
    startDate,
    endDate,
    apiStartDate: undefined,
    apiEndDate: undefined
  };
}

const initialDates = getDefault();

export function ConferencesLazyRoute(props: any) {
  let { path } = useRouteMatch();
  const [state, setDates] = useState({ ...initialDates });
  return (
    <ConferencesContext.Provider value={[state, setDates] as any}>
      <Route path={`${path}${props.path}`}>
        <LazyConferences />
      </Route>
    </ConferencesContext.Provider>
  );
}
