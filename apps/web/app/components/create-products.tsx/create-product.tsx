
import createTodo from "../../actions/createproduct";

export default function CreateProduct() {
    return (
        <div>
        <h1>Create Product</h1>
        <form action={createTodo}>
            <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            </div>
            <div>
            <label htmlFor="task">Task:</label>
            <input type="text" id="task" name="task" required />
            </div>
            <div>
            <label htmlFor="completed">Completed:</label>
            <input type="checkbox" id="completed" name="completed" />
            </div>
            <button type="submit">Create</button>
        </form>
        </div>
    );
    }