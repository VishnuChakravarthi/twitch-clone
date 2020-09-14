import { combineReducers } from "redux";
import GoogleAuthReducer from "./GoogleAuthReducer";

export default combineReducers({
  googleauth: GoogleAuthReducer,
});
