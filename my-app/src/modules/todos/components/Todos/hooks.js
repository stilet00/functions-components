import { makeStyles } from "@material-ui/core/styles";
import {
  createTodo,
  deleteTodo,
  switchStatus,
} from "../../../../store/actions/actions";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    margin: "0 auto",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));
export function useTodos(todos, dispatch) {
  function handleDelete(id) {
    dispatch(deleteTodo(id));
  }
  function handleCreate(newItem) {
    dispatch(createTodo(newItem));
  }
  function handleToggle(id) {
    const item = todos.find((l) => l.id === id);
    dispatch(switchStatus(item));
  }
  return {
    handleDelete,
    handleCreate,
    handleToggle,
  };
}
