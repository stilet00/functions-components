export const ACTION_DELETE_TODO = "ACTION_DELETE_TODO";
export const ACTION_CREATE_TODO = "ACTION_CREATE_TODO";
export const ACTION_CHANGE_STATUS = "ACTION_CHANGE_STATUS";

export function deleteTodo(id) {
  return { type: ACTION_DELETE_TODO, payload: id };
}
export function createTodo(newTodo) {
  newTodo.completed = false;
  newTodo.id = Math.floor(Date.now());
  return { type: ACTION_CREATE_TODO, payload: newTodo };
}
export function switchStatus(todo) {
  const changedTodo = { ...todo, completed: !todo.completed };
  return { type: ACTION_CHANGE_STATUS, payload: changedTodo };
}
