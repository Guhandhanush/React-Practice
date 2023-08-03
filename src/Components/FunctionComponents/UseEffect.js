import React, { useState, useEffect } from 'react'

function UseEffect() {
  const [resources, setResources] = useState('');
  const [items, setItems] = useState([]);
  /**
   * *added useEffect
   */
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resources}`)
      .then(response => response.json())
      .then(json => setItems(json))
  }, [resources])

 
return (
  <>
    <div className='container mt-5'>
      <button className='btn btn-success me-2' onClick={() => { setResources('Users') }}>USERS</button>
      <button className='btn btn-warning me-2' onClick={() => { setResources('Posts') }}>POST</button>
      <button className='btn btn-danger me-2' onClick={() => { setResources('Comments') }}>COMMENTS</button>
    </div>
    <div>
      <h2>{resources}</h2>
      <div className="container mt-3" >
        <div className="container mt-2 glass">
          {items.map(item => {
            return (
              <div className='container'>
                Name: {item.name} <br />
                Email : {item.email} <br />
                Comments : {item.body} <br />
              </div>
            )
          })}


        </div>
      </div>
    </div>
  </>
)
}

export default UseEffect;