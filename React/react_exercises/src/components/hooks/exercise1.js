import React, { useState } from 'react';

export default function Exercise1() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
       
       setCount(count+1)
  };

  return (
    <div className='exercise1'>
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick = {handleClick} > click me, i am {count} </button>
    </div>
  );
}