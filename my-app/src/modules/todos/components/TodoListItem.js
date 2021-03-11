
export default function TodoListItem({item, onDelete, onToggle}) {
    function getItemStyle({ completed }) {
        return {
            cursor: 'pointer',
            backgroundColor: completed ? 'green' : 'yellow',
        };
    }
    const onItemClick = () => {
        onToggle(item.id);
    };
    const onDeleteBtnClick = (e) => {
        e.stopPropagation();
        onDelete(item.id);
    };

    return (
        <li onClick={onItemClick}
            style={getItemStyle(item)}>
                {item.title}
                <span onClick={onDeleteBtnClick}>X</span>
            </li>

    );
}
