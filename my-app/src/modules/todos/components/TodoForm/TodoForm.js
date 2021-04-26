import { useForm } from "./hooks";
import { Button, TextField } from "@material-ui/core";
export default function TodoForm({ onSave }) {
  const { onInputChange, onFormSubmit, todo } = useForm(onSave);
  return (
    <form
      onSubmit={onFormSubmit}
      style={{ display: "flex", alignItems: "center" }}
    >
      <TextField
        id="outlined-basic"
        label="New todo"
        variant="outlined"
        type="text"
        name="title"
        value={todo.title}
        onChange={onInputChange}
      />
      <Button
        variant="contained"
        color="primary"
        style={{ marginLeft: "20px" }}
        type="submit"
      >
        SAVE
      </Button>
    </form>
  );
}
