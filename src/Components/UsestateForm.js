import React, { useState } from 'react'

function UsestateForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    return (
        <div>
            <h2>Multipe UseState</h2>
            <pre>
                <form>
                    Your Name   : <input type="text" onChange={(e) => { setName(e.target.value) }} />
                    <br />
                    Your Number : <input type="text" onChange={(e) => { setNumber(e.target.value) }} />
                </form>
                <footer>
                    <p>
                        Your Name   : {name}
                    </p>
                    <p>
                        Your Number : {number}
                    </p>
                </footer>
            </pre>
        </div>
    )
}

export default UsestateForm