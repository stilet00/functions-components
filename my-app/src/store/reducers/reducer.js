import { INITIAL_STATE } from "../../modules/todos/constants";
import {
  ACTION_CHANGE_STATUS,
  ACTION_CREATE_TODO,
  ACTION_DELETE_TODO,
} from "../actions/actions";

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case ACTION_DELETE_TODO:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== payload),
      };
    case ACTION_CHANGE_STATUS:
      return {
        ...state,
        list: state.list.map((item) =>
          item.id === payload.id ? payload : item
        ),
      };
    case ACTION_CREATE_TODO:
      return { ...state, list: [...state.list, payload] };
    default:
      return state;
  }
}
