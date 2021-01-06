import React from "react";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRef } from "react";

import { AppFeatureA } from "./feature-a";
import FormHeader from "./+shared/form-header";
import FormDefectCheck from "./+shared/form-defect-check";

export default ({ name }) => {
  let btnRef = useRef();
  const context = useContext(AppFeatureA);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = formData => {
    // prevent double submit
    if (btnRef.current) {
      btnRef.current.setAttribute("disabled", "disabled");
    }

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...context.state.selectedItem,
        ...formData,
        id: context.state.selectedItem.id
      })
    };
    fetch("http://localhost:8080/api/car", requestOptions).then(response => {
      try {
        reset({});
        context.dispatch({
          type: context.state.selectedItem.id.includes("temporary_")
            ? "save_item"
            : "update_item",
          payload: {
            t: new Date().toString(),
            formType: "form_car"
          }
        });
      } catch (e) {
        console.error(e);
      }
    });
  };

  useEffect(() => {
    console.log("useEffect car", context.state.selectedItem.id);
    if (
      context.state.selectedItem.id &&
      context.state.selectedItem.id.includes("car")
    ) {
      reset(context.state.selectedItem);
    } else {
      reset({});
    }
  }, [context.state.selectedItem.id]);

  function clear() {
    console.log("clear");
    reset({});
    context.dispatch({ type: "clear_selection" });
  }

  return (
    <div>
      <form
        style={{ border: "1px solid blue", padding: "10px" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormHeader register={register} />

        <br />

        <label>car</label>
        <input ref={register} name="car" />

        <br />

        <label>car_id</label>
        <input ref={register} name="car_id" />

        <br />

        <label>Km</label>
        <input ref={register} name="km" />

        <br />
        <br />

        <FormDefectCheck register={register} />

        <br />

        <button type="submit" ref={btnRef}>
          {context.state.selectedItem.id.includes("temporary_")
            ? "save"
            : "update"}
        </button>
        <input type="button" value="clear" onClick={clear} />
      </form>
    </div>
  );
};
