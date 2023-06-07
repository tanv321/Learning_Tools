import react, {useState, useEffect} from 'react';
import { HorizontalBarrier } from './sharedComponents';

export default function Exercise8() {
    const [isShow, setIsShow] = useState(false);

    const toggleCollapse = () => {
      setIsShow(true)

    }

    const collapseOn = () => {
        setIsShow(false);
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

        <p style={{ fontSize:"13px"}}> This is an example text which is</p>
        {isShow === true && ( <p style={{ fontSize:"13px"}}>random secret information  <button onClick={collapseOn}> hide detail</button></p> )} 
        {isShow === false && <button onClick={toggleCollapse}> show detail </button> }
        
        </div>
    );

}