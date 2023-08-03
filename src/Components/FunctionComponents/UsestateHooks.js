import React, {useState} from 'react'

function UsestateHooks() {
    var initialCount = 0;
    const [count,SetCount] = useState(initialCount);
  return (
    /**
     * * prevCount is a function which is used to store the previous value of the current state.
     * * Best practice to use this function 
     */
    <div>
        <h1>{count}</h1>
        <button className="btn btn-success me-2" onClick={()=>SetCount(prevCount=> prevCount+1)}>Increment</button> 
        <button className="btn btn-info me-2" onClick={()=>SetCount(prevCount=> prevCount-1)}>Decrement</button>
        <button className="btn btn-danger me-2" onClick={()=>SetCount(initialCount)}>Reset</button>
    </div>
  )
}

export default UsestateHooks