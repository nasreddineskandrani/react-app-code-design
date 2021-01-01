import React, { Suspense } from "react";
import { Switch } from "react-router-dom";
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
