import React from "react";

const A = ({ register }) => {
  return (
    <div>
      <label>date</label>
      <input ref={register} name="date" />

      <label>inspector</label>
      <input ref={register} name="inspector" />
    </div>
  );
};

export default A;