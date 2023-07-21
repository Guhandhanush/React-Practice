import React, { useState } from 'react'

function UseEffect() {
  const [resources, setResources] = useState('')
  return (
    <>
      <div>
        <button onClick={() => { setResources('Users') }}>USERS</button>
        <button onClick={() => { setResources('Posts') }}>POST</button>
        <button onClick={() => { setResources('Comments') }}>COMMENTS</button>
      </div>
      <div>
        <h2>{resources}</h2>
      </div>
    </>
  )
}

export default UseEffect