import React, {useState} from "react";

function Counters() {
    const [count, setCount] = useState(0);
  
    function increment() {
            setCount((currentCount) => currentCount + 1);
            setCount((currentCount) => currentCount + 1);
    }
  
    return <div onClick={increment}>{count}</div>;
  }

  export default Counters;
