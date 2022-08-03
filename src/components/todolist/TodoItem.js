function TodoItem(props) {
    const item = props.thething;
    const color = props.color;
    return (
        <li style={{color: color}}>
            {item}
        </li>
    )
}

export default TodoItem;