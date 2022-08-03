import { useState } from "react";
import TodoList from "./todolist/TodoList";

function Content() {
    const [todoList, setTodoList] = useState([]);

    let [newTodo, setNewTodo] = useState("");
    
    const onClickHandler = () => {
        const newTodoList = [...todoList];
        newTodoList.push(newTodo);
        setTodoList(newTodoList);     
        setNewTodo("");
    }

    return( 
        <div>
            <input type="text" onChange={evt => { setNewTodo(evt.currentTarget.value) }}
                               value={newTodo}
            />

            <button  onClick={onClickHandler}>Save</button>
            <TodoList items={todoList}/>
        </div>
    )
}

export default Content;