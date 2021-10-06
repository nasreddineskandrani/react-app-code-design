import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { AppRouting } from "./app.routing";
import {
  QueryClient,
  QueryClientProvider
} from "react-query";
// import { utilsFormat } from "./features/games/games.component";
///

const queryClient = new QueryClient();

export function App() {
  const t = 1; // utilsFormat();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/games">go to games {t}</Link>
            </li>
          </ul>

          <hr />

          <AppRouting />
        </div>
      </Router>
    </QueryClientProvider>
  );
}
