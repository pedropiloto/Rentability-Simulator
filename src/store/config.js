import { createStore, compose } from "redux";
import { combineReducers } from "redux";
import traditionalRentingReducer from "./traditional-renting/traditional-renting-reducer";

const reducer = combineReducers({
  traditionalRenting: traditionalRentingReducer
});

export default () => {
  const composeEnhancers =
    (process.env.REACT_APP_BUILD_ENV === "development" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
  const store = createStore(reducer, undefined, composeEnhancers);
  return store;
};
