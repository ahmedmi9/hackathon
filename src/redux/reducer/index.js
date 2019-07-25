import { combineReducers } from "redux";
import courseReducer from "./courseReducer";
import authorReducer from "./authorReducer";
import apiCallStatusReducer from "./apiCallStatusReducer";
import { authentication } from '../../_reducers/authentication.reducer';
import { registration } from '../../_reducers/registration.reducer';
import { users } from '../../_reducers/users.reducer';
import { alert } from '../../_reducers/alert.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  courses: courseReducer,
  authors: authorReducer,
  apiCallsInProgress: apiCallStatusReducer

});

export default rootReducer;
