import { useState } from "react";
import TodoList from "./todolist/TodoList";

function Content() {
    const todoItems = ["get milk", "get eggs" , "walk dog", "feed cat", "wash car"];

    let [myName, setMyName] = useState("");
    
    const onClickHandler = () => {
        todoItems.push("A New Thing!")
        
    }

    return( 
        <div>
            <input type="text" onChange={evt => { setMyName(evt.currentTarget.value) }}/>
            <button  onClick={onClickHandler}>Save</button>
            <p>
                My Name Is {myName}
            </p>
            <TodoList items={todoItems}/>
        </div>
    )
}

export default Content;