import { createAction, handleActions } from "redux-actions";


const TAG_SELECTION = "steadio/TAG_SELECTION";

export const tagSelection = createAction(TAG_SELECTION, (content) => content);

const initialState = {
  selectedTag: "전체",
}

const steadio = handleActions({
  [TAG_SELECTION] : (state, action) => ({ selectedTag: action.payload}),
}, initialState);

export default steadio;