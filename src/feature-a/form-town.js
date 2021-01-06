import React from "react";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";

import { AppFeatureA } from "./feature-a";
import FormHeader from "./+shared/form-header";
import FormDefectCheck from "./+shared/form-defect-check";

export default ({ }) => {
  const context = useContext(AppFeatureA);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = formData => {
    console.log(formData);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...context.state.selectedItem,
        ...formData,
        id: context.state.selectedItem.id
      })
    };
    fetch("http://localhost:8080/api/town", requestOptions).then(response => {
      try {
        reset({});
        context.dispatch({
          type: context.state.selectedItem.id.includes("temporary_")
            ? "save_item"
            : "update_item",
          payload: {
            t: new Date().toString(),
            formType: "form_town"
          }
        });
      } catch (e) {
        console.error(e);
      }
    });
  };

  useEffect(() => {
    console.log("useEffect town", context.state.selectedItem.id);
    if (
      context.state.selectedItem.id &&
      context.state.selectedItem.id.includes("town")
    ) {
      reset(context.state.selectedItem);
    } else {
      reset({});
    }
  }, [context.state.selectedItem, context.state.selectedItem.id, reset]);

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

        <label>town</label>
        <input ref={register} name="town" />

        <br />

        <label>temperature</label>
        <input ref={register} name="temperature" />

        <br />

        <label>population</label>
        <input ref={register} name="population" />

        <br />
        <br />

        <FormDefectCheck register={register} />

        <br />

        <button type="submit">
          {context.state.selectedItem.id.includes("temporary_")
            ? "save"
            : "update"}
        </button>
        <input type="button" value="clear" onClick={clear} />
      </form>
    </div>
  );
};
