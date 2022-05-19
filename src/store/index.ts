import { createStore } from "redux";
import { Action, ActionTypes } from "../Type";

export interface initState {
  password: string;
}

const initialState: initState = {
  password: "",
};

const PassStore = (state = initialState, action: Action): initState => {
  switch (action.type) {
    case ActionTypes.UPDATE:
      return {
        password: action.value,
      };
  }
  return state;
};

export const reducer = createStore(PassStore);
