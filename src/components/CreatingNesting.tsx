import { useState } from "react";

function MyButton() {
    return (
      <button>I'm a button</button>
    );
  }


function MyButton2 () {
    function handleClick() {
      alert('You clicked me!');
    }
  
    return (
      <button onClick={handleClick}>
        Click me
      </button>
    );
  }

function MyButton3() {
    const [count, setCount] = useState(0);
  
    function handleClick() {
      setCount(count + 1);
    }
  
    return (
      <button onClick={handleClick}>
        Clicked {count} times
      </button>
    );
  }


export default function MyReactApp() {
    return (
      <div>
        <h1>Welcome to my React app</h1>
        <MyButton />
        <MyButton2/>
        <MyButton3/>
      </div>
    );
  }

