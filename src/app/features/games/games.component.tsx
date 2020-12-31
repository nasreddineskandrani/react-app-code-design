import React, { createContext, memo, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { GamesRouting } from "./games.routing";

export const GamesContext = createContext([]);

export default function Games() {
  console.log("render Games");

  let { url } = useRouteMatch();

  const [newUploadDoneDate, setNewUploadDoneDate] = useState(new Date());

  function upload() {
    setNewUploadDoneDate(new Date());
  }

  return (
    <GamesContext.Provider value={[newUploadDoneDate, setNewUploadDoneDate] as any}>
      <h1>Games</h1>
      <button onClick={upload}>
        upload big chunk of mixed data in backend
      </button>
      <hr />
      <div>
        <ul>
          <li>
            <Link to={`${url}/sales`}>Sales</Link>
          </li>
          {/*  just a try - not used
            <li>
              <Link to={`${url}/sales2`}>Sales 2</Link>
            </li>
           */}
          <li>
            <Link to={`${url}/conferences`}>Conferences</Link>
          </li>
        </ul>

        <hr />

        <GamesRouting />
      </div>
    </GamesContext.Provider>
  );
}
