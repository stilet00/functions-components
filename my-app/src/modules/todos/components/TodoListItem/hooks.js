export function useTodoListItem(onToggle, item) {
  function getItemStyle({ completed }) {
    return {
      cursor: "pointer",
      backgroundColor: completed ? "#4169e1" : "#909090",
    };
  }
  const onItemClick = () => {
    onToggle(item.id);
  };
  return {
    getItemStyle,
    onItemClick,
  };
}
