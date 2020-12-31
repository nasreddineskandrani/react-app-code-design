import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { AppRouting } from "./app.routing";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider
} from "react-query";
///

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/games">Games</Link>
            </li>
          </ul>

          <hr />

          <AppRouting />
        </div>
      </Router>
    </QueryClientProvider>
  );
}
