import { useTodoListItem } from "./hooks";
import { Button, ListItem, ListItemText } from "@material-ui/core";

export default function TodoListItem({ item, onDelete, onToggle }) {
  const { onItemClick, getItemStyle } = useTodoListItem(onToggle, item);
  return (
    <ListItem button onClick={onItemClick} style={getItemStyle(item)}>
      <ListItemText primary={item.title} />
      <Button
        variant="contained"
        onClick={(e) => {
          e.stopPropagation();
          onDelete(item.id);
        }}
      >
        DELETE
      </Button>
    </ListItem>
  );
}
