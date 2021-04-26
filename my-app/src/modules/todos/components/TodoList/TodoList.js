import TodoListItem from "../TodoListItem/TodoListItem";
import { List } from "@material-ui/core";
export default function TodoList({ todos, onToggle, onDelete }) {
  return (
    <List component="nav" aria-label="main mailbox folders">
      {todos.map((item) => (
        <TodoListItem
          key={item.id}
          item={item}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </List>
  );
}
