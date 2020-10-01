import { combineReducers } from "redux";
import { reducer } from "redux-form";
import GoogleAuthReducer from "./GoogleAuthReducer";
import StreamReducer from "./StreamReducer";

export default combineReducers({
  googleauth: GoogleAuthReducer,
  streams: StreamReducer,
  form: reducer,
});
