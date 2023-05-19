import React, { useState } from 'react';


export default function Exercise2 () {
    const [todos, setTodos] = useState([]);
    const [count, setCount] = useState(0);

    
    const handleCheckboxChange = (todoId) => {
        // Update the todos state using the previous state
        setTodos((prevTodos) =>
        prevTodos.map((todo) =>
            // Check if the todo id matches the passed todoId
            todo.id === todoId
            ? { ...todo, completed: !todo.completed } // If there's a match, toggle the completed status
            : todo // Otherwise, keep the todo object unchanged
        )
);
        
    };

    const handleAddingTodo = (event) => {
        event.preventDefault(); // Prevent form submission from refreshing the page
        const todoText = event.target.elements.todo.value;
        const newTodo = { id: count, description: todoText, completed: false };
        setCount(count+1);
        setTodos([...todos, newTodo]);
        console.log(todos);
    };

    const HorizontalBarrier = () => {
        return (
          <div style={{ borderTop: '50px solid #002', margin: '1px' }}></div>
        );
      };

    return (
        <div>
        <h1>Second exercise </h1>

        <h1 style= {{fontSize : '18px' }} >
            Create a React component called "TodoList". This component should render a list of todo items. Each todo item should have a checkbox and a label displaying the task description. When a checkbox is checked, the corresponding todo item should be marked as completed and displayed with a line-through style. Additionally, the component should have an input field and a button that allows the user to add new todo items to the list.
        </h1>

        <HorizontalBarrier />
        {/* will be activated when crossing a todo off of list  onchange the handlecheckedboxChange will be activated*/}
        {todos.map(todo => (
            <div key={todo.id}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleCheckboxChange(todo.id)} // Replace "" with the appropriate function
            />
            <label style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.description}
            </label>
            </div>
        ))}
        <form onSubmit={handleAddingTodo}>
        <label style= {{fontSize:"17px"}} >
        Add a TODO   
        <input type="text" name="todo" placeholder='TODO' style={{ marginLeft: "15px" }} />
        </label>
        <button type="submit">Add</button>
        </form> 

        

      </div>
    );
}