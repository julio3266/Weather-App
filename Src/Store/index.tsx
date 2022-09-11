import { legacy_createStore as createStore } from "redux";
import { LocationReducer } from "./Modules/Location/reducer";

export const store = createStore(LocationReducer);
