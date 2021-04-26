import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    margin: "0 auto",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));
export function useTodos(todos, dispatch) {
  function deleteTodo(id) {
    dispatch({ type: "delete", payload: id });
  }
  const createItem = (newItem) => {
    newItem.completed = false;
    newItem.id = Math.floor(Date.now());
    dispatch({ type: "create", payload: newItem });
  };
  const toggleItem = (id) => {
    const item = todos.find((l) => l.id === id);
    const newItem = { ...item, completed: !item.completed };
    dispatch({ type: "toggle", payload: newItem });
  };
  return {
    deleteTodo,
    createItem,
    toggleItem,
  };
}
