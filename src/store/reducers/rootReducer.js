import { combineReducers } from "redux";
import contactsReducer from "./contactsReducer";

const rootReducer = combineReducers({
  contactsState: contactsReducer,
});

export default rootReducer;
