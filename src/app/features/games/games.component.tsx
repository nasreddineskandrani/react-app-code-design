import React, { createContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import { store } from "../../..";
import { LeaveGames } from "./+state/games.actions";
import gamesReducer from "./+state/games.reducer";
import { GamesRouting } from "./games.routing";

export const GamesContext = createContext([]);
store.injectReducer('games', gamesReducer);

export default function Games() {
  console.log("render Games");
  const dispatch = useDispatch();
  
  let { url } = useRouteMatch();

  const [newUploadDoneDate, setNewUploadDoneDate] = useState(new Date());

  function upload() {
    setNewUploadDoneDate(new Date());
  }

  useEffect(() => {
    return (() => {
      dispatch(LeaveGames);
    });
  }, []);

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
