import React, { useEffect, useState } from "react";
import { useContext } from "react";

import { AppFeatureA } from "./feature-a";

const A = () => {
  const context = useContext(AppFeatureA);
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("useEffect dashboard list, GO GRAB A NEW LIST");
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    };
    fetch("http://localhost:8080/api/list", requestOptions).then(response => {
      try {
        console.log(response);
        setData(response);
      } catch (e) {
        console.error(e);
      }
    });
  }, [context.state.saveTime]);

  useEffect(() => {
    // test
    console.log("second use effect");
  }, [context.state.saveTime]);

  function edit(item) {
    context.dispatch({ type: "select_item", payload: item });
  }

  return (
    <div>
      <h3>inspections history</h3>
      <ul style={{ border: "1px solid blue", padding: "40px" }}>
        {data.map((item, index) => {
          return (
            <li
              style={{ margin: "10px", border: "1px solid green" }}
              key={index}
            >
              {item.inspector}
              <button style={{ float: "right" }} onClick={() => edit(item)}>
                {" "}
                edition{" "}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};


export default A;