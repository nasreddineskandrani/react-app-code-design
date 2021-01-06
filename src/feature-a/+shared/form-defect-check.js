import React from "react";

const A = ({ register }) => {
  return (
    <div>
      <label>defect check</label>
      <input ref={register} name="defect_check" />
    </div>
  );
};

export default A;
