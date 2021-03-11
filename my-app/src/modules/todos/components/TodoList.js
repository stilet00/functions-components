import TodoListItem from './TodoListItem';

export default function TodoList({ todos, onToggle, onDelete }) {
    return (
        <ul>
            {todos.map((item) => (
                <TodoListItem
                    key={item.id}
                    item={item}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}