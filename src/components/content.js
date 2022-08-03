import TodoList from "./todolist/TodoList";

function content() {
    const todoItems = ["get milk", "get eggs" , "walk dog", "feed cat", "wash car"];

    return( 
        <div>
            <input type="text"/><button>Save</button>
            <TodoList items={todoItems}/>
        </div>
    )
}

export default content;