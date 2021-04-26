import { useState } from "react";
import { TODO } from "../../constants";
export function useForm(onSave) {
  const [todo, setTodo] = useState(TODO);
  const onInputChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    onSave(todo);
    setTodo({ title: "" });
  };
  return {
    onInputChange,
    onFormSubmit,
    todo,
  };
}
