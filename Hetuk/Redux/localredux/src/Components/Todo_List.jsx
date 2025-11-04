import { DELETE_TODOS } from "../Redux/todos/Action";
import { useDispatch, useSelector } from "react-redux";

export const Todo_List = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.todo.todos);

    const handleDelete = (id) => {
        dispatch({ type: DELETE_TODOS, payload: id });
    };

    return (
        <>
            <h3>Todo List</h3>
            {
                data.map((el) => (
                    <div key={el.id}>
                        <p>{el.text}</p>
                        <button onClick={() => handleDelete(el.id)}>Delete</button>
                    </div>
                ))
            }
        </>
    );
};