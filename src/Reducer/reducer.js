import { initState } from "../States/State";

export const Reducer = (state = initState, action) => {
  switch (action.type) {
    case "BUY_COKE":
      return {
        ...state, coke: state.coke + 1
      }

    case "BUY_BRIYANI":
      return {
        ...state, briyani: state.briyani + 1
      }
      
    case "SELL_BRIYANI":
      return {
        ...state, briyani: state.briyani - 1
      }

    case "SELL_COKE":
      return {
        ...state, coke: state.coke - 1
      }


    default: return state
  }
}