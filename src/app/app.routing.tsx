import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

///

const lazyGames = lazy(() => import("./features/games/games.component"));

export function AppRouting() {
  return (
    <Switch>
      <Suspense fallback={<div>11111111 loading...</div>}>
        <Route key="games" path="/games" component={lazyGames} />
      </Suspense>
    </Switch>
  );
}
