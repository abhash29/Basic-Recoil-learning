import { todoState } from "../atoms/TodoState";
import { useSetRecoilState } from "recoil";

function Todo({ text, id }) {
    const setTodos = useSetRecoilState(todoState);

    function deleteTodo() {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }

    return (
        <div>
            <p>{text}</p>
            <button onClick={deleteTodo}>X</button>
        </div>
    );
}

export default Todo;
