import { combineReducers } from "redux";

import AuthReducer from "../reducers/auth";
import Master from "../reducers/master";

/* ============================================================================
  Combine ALL Reducers
============================================================================= */
const rootReducer = combineReducers({
  Auth: AuthReducer,
  master: Master,
});

export default rootReducer;
