import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import { connect } from "react-redux";
import { useStyles, useTodos } from "./hooks";
function Todos({ todos, dispatch }) {
  const classes = useStyles();
  const { handleDelete, handleCreate, handleToggle } = useTodos(
    todos,
    dispatch
  );
  return (
    <div className={classes.root}>
      <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} />
      <TodoForm onSave={handleCreate} />
    </div>
  );
}
function mapStateToProps(state) {
  return { todos: state.list };
}
export default connect(mapStateToProps)(Todos);
