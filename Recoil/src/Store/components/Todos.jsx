import Todo from "./Todo";
import { todoState } from "../atoms/TodoState";
import { useRecoilState } from "recoil";
import { useState } from "react";

function Todos() {
    const [todos, setTodos] = useRecoilState(todoState);
    const [newTodo, setNewTodo] = useState("");

    function addTodos() {
        if (newTodo.trim() === "") return; // Prevent adding empty todos

        const newTodoObj = {
            id: Math.random().toString(36).substr(2, 9), // Generate a unique ID
            text: newTodo,
        };

        setTodos([...todos, newTodoObj]); // Add new todo as an object
        setNewTodo(""); // Clear the input field after adding the todo
    }

    return (
        <main>
            <input
                type="text"
                id="todoInput"
                value={newTodo}
                onChange={(e) => {
                    const value = e.target.value;
                    console.log(value);
                    setNewTodo(value);
                }}
            />
            <button onClick={addTodos}>Add Todos</button>
            <button onClick={() => setTodos([])}>Clear Todos</button>

            {todos.map((todo) => (
                <Todo key={todo.id} text={todo.text} id={todo.id} />
            ))}
        </main>
    );
}

export default Todos;
