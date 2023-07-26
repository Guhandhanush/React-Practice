import React, { useState, useEffect } from 'react'

function UseEffect() {
  const [resources, setResources] = useState('');
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resources}`)
      .then(response => response.json())
      .then(json => setItems(json))
  }, [resources])
  return (
    <>
      <div>
        <button onClick={() => { setResources('Users') }}>USERS</button>
        <button onClick={() => { setResources('Posts') }}>POST</button>
        <button onClick={() => { setResources('Comments') }}>COMMENTS</button>
      </div>
      <div>
        <h2>{resources}</h2>
        <div>
          {items.map(item => {
            return <div>{JSON.stringify(item)}</div>
          })}
        </div>
      </div>
    </>
  )
}

export default UseEffect;