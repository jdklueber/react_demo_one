import TodoItem from "./TodoItem";

/*
     {
        items:  [this, that, the other]
     }
*/

function TodoList({items}) {
    
    return (
        <div>
            <h1>Things To Do:</h1>
            <ul>
                {
                    items.map(e => {return <TodoItem thething={e}
                        color={"red"}
                    />})
                }
            </ul>
        </div>
    )
}

export default TodoList;