import react, {useState, useEffect} from 'react';
import { HorizontalBarrier } from './sharedComponents';

export default function Exercise8() {
    const [isShow, setIsShow] = useState(false);
    const [isShowQ2, setIsShowQ2] = useState(false);

    const toggleCollapse = () => {
      setIsShow(true)

    }

    const toggleCollapseQ2 = () => {
        setIsShowQ2(true)
  
      }
    const collapseOn = () => {
        setIsShow(false);
    }
    const collapseOnQ2 = () => {
        setIsShowQ2(false);
    }

    return (
        <div>
        <h1> Eight exercise</h1>
        <h1 style={{ fontSize: '10px' }}>
        Create a React component called "FAQAccordion". 
        This component should render a list of frequently asked questions (FAQs) with collapsible sections. 
        Each FAQ section should display a question and its corresponding answer. Implement the functionality to expand 
        or collapse a section when its header is clicked. This exercise will help you practice basic component rendering 
        and state management in React.
        </h1>
        <HorizontalBarrier />
        <h1 style={{ borderBottom: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}> FAQ </h1>
        
        <p style={{ fontSize:"13px"}}> What is React? React is a JavaScript library for building user interfaces.</p>
        {isShow === true && ( <p style={{ fontSize:"13px"}}>
         It allows developers to create reusable UI components and build complex UIs by composing these components together. 
        React follows a component-based architecture and uses a virtual DOM (Document Object Model) for efficient updates and rendering.
         It is widely used for building modern web applications and provides a declarative and efficient way to handle UI updates.  <button onClick={collapseOn}> hide detail</button></p> )} 
        {isShow === false && <button onClick={toggleCollapse}> show more detail </button> }


        <p style={{ fontSize:"13px", borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}> Is React a framework or a library? React is a JavaScript library for building user interfaces.</p>
        {isShowQ2 === true && ( <p style={{ fontSize:"13px"}}>
        React is often referred to as a library because it focuses on the view layer of an application. 
        However, with the ecosystem of supporting libraries and tools, such as React Router for routing and Redux for state management, 
        React can be used as a foundation to build full-fledged web applications. 
        While it lacks some features typically found in comprehensive frameworks, React's modular and flexible nature allows developers to choose and integrate additional libraries as needed.  <button onClick={collapseOnQ2}> hide detail</button></p> )} 
        {isShowQ2 === false && <button onClick={toggleCollapseQ2}> show more detail </button> }
        
        
        </div>
    );

}