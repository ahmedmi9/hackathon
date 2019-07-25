import { createStore, applyMiddleware, compose } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import rootReducer from "./reducer";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
const loggerMiddleware = createLogger();

export default function configureStore(intialState) {
  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    intialState,
    composeEnhancer(
      applyMiddleware(thunk, loggerMiddleware, reduxImmutableStateInvariant())
    )
  );
}
