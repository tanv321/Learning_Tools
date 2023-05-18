import React, { useState } from 'react';

export default function Exercise1() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
       
       setCount(count+1)
  };

  return (
    <div className='exercise1'>
      <h1>First exercise </h1>
      <h2>Create a simple React component called "Counter". This component should have a button and a counter value that starts at 0. When the button is clicked, the counter value should increment by 1. Display the current counter value on the screen.

You can use functional components and hooks to accomplish this task. Try to implement the Counter component and test it in a React development environment.</h2>
      <button onClick = {handleClick} > click me, i am {count} </button>
    </div>
  );
}