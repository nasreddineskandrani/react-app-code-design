import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./features/home/home.component";
///

const lazyGames = lazy(() => import("./features/games/games.component"));

export function AppRouting() {
  return (
    <Switch>
      <Suspense fallback={<div>11111111 loading...</div>}>
        <Route exact path="/" render={() => <Home />} />
        {/* not lazy loaded yet for Home */}
        <Route exact path="/home" render={() => <Home />} />
        <Route key="games" path="/games" component={lazyGames} />
      </Suspense>
    </Switch>
  );
}
