import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { AppRouting } from "./app.routing";
///

export function App() {
  return (
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
  );
}
