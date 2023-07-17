import React, { useState } from 'react'

function ArrayUsestate() {
/**
 * *while clicking 
 */
    const [items, setItems] = useState([]);
    var addItem = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
    return (
        <>
            <button onClick={addItem}>Add number</button>
            <div>
                {items.map((item) => (
                    <span key={item.id}> No.{item.id}  Value: {item.value}</span>
                ))}
            </div>
        </>
    )
}

export default ArrayUsestate