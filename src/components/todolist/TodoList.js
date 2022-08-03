import TodoItem from "./TodoItem";

/*
     {
        items:  [this, that, the other]
     }
*/
function makeTodo(item) {
    return (
        <TodoItem item={item} color={"red"}/>
    );
}


function TodoList({items}) {
    
    return (
        <div>
            <h1>Things To Do:</h1>
            <ul>
                {
                    items.map(makeTodo)
                }
            </ul>
        </div>
    )
}

export default TodoList;