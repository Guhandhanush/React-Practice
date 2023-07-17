import React, { useState } from 'react'

function InputUsestate() {

    /**
     * * here used object inside useState to store the values from input and used spread operator to store the values in separate copy of the object.  
     */

    const [name, setName] = useState({ username: '', password: '' })

    return (
        <div>
            <h2>Using Object</h2>
            <pre>
                <form>
                    Username : <input type="text" value={name.username} onChange={e => setName({ ...name, username: e.target.value })} />
                    <br />
                    Password : <input type="password" value={name.password} onChange={e => setName({ ...name, password: e.target.value })} />
                </form>
                <p>Your Username is {name.username}</p>
                <p>Your Password is {name.password}</p>
                <p>{JSON.stringify(name)}</p>
            </pre>
        </div>
    )
}

export default InputUsestate