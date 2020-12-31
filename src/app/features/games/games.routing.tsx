import React, { Suspense, lazy, useState, createContext } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { ConferencesLazyRoute } from "./conferences/conferences-lazy.route";
import { SalesLazyRoute } from "./sales/sales-lazy.route";

///

export function GamesRouting() {
  console.log("GamesRouting render");
  return (
    <Switch>
      <Suspense fallback={<div>11111111 loading...</div>}>
        <SalesLazyRoute path="/sales" />
        <ConferencesLazyRoute path="/conferences" />
      </Suspense>
    </Switch>
  );
}
