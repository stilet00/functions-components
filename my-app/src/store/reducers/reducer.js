import { INITIAL_STATE } from "../../modules/todos/constants";

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case "delete":
      return {
        ...state,
        list: state.list.filter((item) => item.id !== payload),
      };
    case "toggle":
      return {
        ...state,
        list: state.list.map((item) =>
          item.id === payload.id ? payload : item
        ),
      };
    case "create":
      return { ...state, list: [...state.list, payload] };
    default:
      return state;
  }
}
