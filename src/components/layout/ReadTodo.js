import React, { Fragment, useEffect, useState } from "react";
import EditTodo from "./EditTodo";

export default function ReadTodos() {
  const [todos, setTodos] = useState([]);

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5001/todos/${id}`, {
        method: "DELETE",
      });
      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5001/todos");
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Fragment>
      <table className="table-auto w-full mx-auto">
        <thead>
          <tr className="border-b-4">
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
            <td><EditTodo todo={todo} /></td>
            <td><button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => deleteTodo(todo.todo_id)}>Delete</button></td>
          </tr>
        ))}
        </tbody>
      </table>
    </Fragment>
  );
}
