function TodoItem(props) {
    const item = props.item;
    const color = props.color;
    return (
        <li style={{color:"red"}}
        >
            {item}
        </li>
    )
}

export default TodoItem;