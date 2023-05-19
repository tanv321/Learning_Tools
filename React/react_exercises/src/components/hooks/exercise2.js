import React, { useState } from 'react';


export default function Exercise2 () {
    const [todos, setTodos] = useState([]);

    const todoItem = {
        id: 1, // Unique identifier for the todo item
        description: 'Complete assignment', // Task description
        completed: false // Completion status of the task
      };

    return (
        <div>
        <h1>Second exercise </h1>

        <h1 style= {{fontSize : '18px' }} >
            Create a React component called "TodoList". This component should render a list of todo items. Each todo item should have a checkbox and a label displaying the task description. When a checkbox is checked, the corresponding todo item should be marked as completed and displayed with a line-through style. Additionally, the component should have an input field and a button that allows the user to add new todo items to the list.
        </h1>
        
        {todos.map(todo => (
          <div key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => ""(todo.id)}
            />
            <label style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.description}
            </label>
          </div>
        ))}
      </div>
    );
}