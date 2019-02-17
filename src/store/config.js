import { createStore, compose, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";

import traditionalRentingReducer from "./traditional-renting/traditional-renting-reducer";
import rootSaga from "./root-saga";

const reducer = combineReducers({
  traditionalRenting: traditionalRentingReducer
});

export default () => {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers =
    (process.env.REACT_APP_BUILD_ENV === "development" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

  const store = createStore(
    reducer,
    undefined,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
