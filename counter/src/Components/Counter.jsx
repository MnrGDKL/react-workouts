import {useState} from 'react'
import "./Counter.css";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState("black".toUpperCase())



  const incCounter = () =>{
      setCounter(counter + 1);
      setColor("blue".toUpperCase());
  };

  const decCounter = () =>{
      setCounter(counter - 1);
      setColor("red".toUpperCase());
  };

  const reset = ()=>{
        setCounter(0)
        setColor("black".toUpperCase());
  }

  const divStyle = {backgroundColor : color}

  return (
    <div className='counter-div'style={divStyle}>
          <h1>Counter: {counter}</h1>
          <button onClick={incCounter}>Increase</button>
          <button onClick={decCounter}>Decrease</button>
          <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter;