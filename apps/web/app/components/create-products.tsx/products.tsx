import { CreateTodoDto } from "@repo/types";

export default async function Todos() {
  const response = await fetch(`${process.env.API_URL}/todos`, {
    next: { tags: ["todos"] },
  }); 

  const todos: CreateTodoDto[] = await response.json();

  return (
    <div>
      <h1>Todos</h1>
      <div>
        {todos.map((todo) => (
  <div key={todo.id} className="todo">
                        <h2>{todo?.name}</h2> {/* Adjust property names */}

            <h2>{todo?.task}</h2> {/* Adjust property names */}
            <p>Status: {todo.completed ? "Completed" : "Pending"}</p>
          </div>
        ))}
        {todos.length === 0 && <p>No todos found.</p>}    
      </div>
    </div>
  );
}