import React from "react";
import { useReducer } from "react";

import FormCar from "./form-car";
import FormTown from "./form-town";
import DashboardList from "./dashboard-list";

export const AppFeatureA = React.createContext({});

const A = () => {
  let initialState = {
    selectedItem: {},
    saveTime: "",
    selectElement: "form_car"
  };

  let reducer = (state, action) => {
    console.log("reducer");
    switch (action.type) {
      case "save_item":
        return {
          ...state,
          saveTime: action.payload,
          selectedItem: {}
        };
      case "update_item":
        return {
          ...state,
          saveTime: action.payload,
          selectedItem: {}
        };
      case "clear_selection":
        console.log("clear_selection");
        return {
          ...state,
          selectedItem: {
            id: state.selectedItem.id,
            formType: state.selectedItem.formType
          }
        };
      case "select_item":
        console.log("select_item", action.payload);
        return {
          ...state,
          selectedItem: { ...action.payload },
          selectElement: "form_car"
        };
      case "new_item":
        console.log("new_item", action.payload);
        return {
          ...state,
          selectedItem: {
            id: "temporary_" + new Date().toString(),
            ...{
              formType: action.payload.formType
            }
          }
        };
      case "close_current_form":
        console.log("close_current_form", action.payload);
        return {
          ...state,
          selectedItem: {}
        };
      case "set_form_type":
        console.log("set_form_type", action.payload);
        return {
          ...state,
          selectElement: action.payload
        };
      default:
        return state;
    }
  };

  let [state, dispatch] = useReducer(reducer, initialState);
  let value = { state, dispatch };

  let createNew = _ => {
    console.log("click create new inspection", state.selectElement);
    dispatch({
      type: "new_item",
      payload: { formType: state.selectElement }
    });
  };

  let close = _ => {
    console.log("click create new inspection", state.selectElement.value);
    dispatch({
      type: "close_current_form",
      payload: { formType: undefined }
    });
  };

  let selectFormType = event => {
    dispatch({
      type: "set_form_type",
      payload: event.target.value
    });
  };

  return (
    <AppFeatureA.Provider style={{ padding: "10px" }} value={value}>
      <DashboardList />

      <select
        name="forms-type"
        id="forms-type"
        value={state.selectElement}
        onChange={selectFormType}
      >
        <option value="form_town">town form</option>
        <option value="form_car">car form</option>
      </select>
      <button onClick={createNew}> new </button>
      <button onClick={close}> close current form </button>
      <br />
      <br />

      {state.selectedItem.formType === "form_car" ? <FormCar /> : ""}
      <br />

      {state.selectedItem.formType === "form_town" ? <FormTown /> : ""}
      <br />
    </AppFeatureA.Provider>
  );
};

export default A;