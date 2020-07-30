import { createStore } from "redux";
import { reducer } from "./reducer.js";
/**
 * The store will be a simple javascript object.
 * To store the active files the object will have one property called
 * `editors`. Editors will be an array of objects that have the following
 * properties: `body` and `type`. Where body is the source code of the editor
 * and type is the type of source code it is.
 */

const store = createStore(reducer);
export default store;
