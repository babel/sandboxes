import { produce } from "immer";
import { EditorAdded, EditorChanged } from "./reduxHelpers.js";

export function reducer(store = { editors: [] }, action) {
  switch (action.type) {
    case EditorChanged:
      break;
    case EditorAdded:
      return produce(store, (storeDraft) => {
        storeDraft.editors.push({
          type: action.payload.type,
          body: action.payload.body,
        });
      });
    default:
      return store;
  }
}
