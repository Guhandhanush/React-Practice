import { initState } from "../States/State";

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case "BUY": {
      return {
        ...state,
        eggcake: state.eggcake - 1
      }
    }
    default:
      return state;
  }
}