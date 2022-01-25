import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

function Signup({ data }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [occupation, setOccupation] = useState('')
    const [state, setState] = useState('')

    // handle submit that allows the POST request to be made to the api with the correct information, returns a 200 status in the developer tools.
    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('https://frontend-take-home.fetchrewards.com/form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password, occupation, state })
        })

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Name' value={name} required onChange={(e) => setName(e.target.value)} />
                <input type='email' placeholder='Email' value={email} required onChange={(e) => setEmail(e.target.value)} />
                <input type='password' placeholder='Password' value={password} required onChange={(e) => setPassword(e.target.value)} />
                <select required onChange={(e) => setOccupation(e.target.value)}>

                    {/* set a default value to the select field on this one, and the state one, that starts out with default, and the default hides when you click to select */}
                    <option value='default' disable hidden>
                        Choose your Occupation
                    </option>

                    {/* mapping through the occupations in order to display each job as an option in the select field.  */}
                    {data.occupations.map((job) => <option key={job}>{job}</option>)}
                </select>
                <select required onChange={(e) => setState(e.target.value)}>
                    <option value='default' disable hidden>
                        Choose your Location
                    </option>

                    {/* mapping through the states in order to display each state as an option in the select field. Used states.name to only return the names */}
                    {data.states.map((state) => <option key={state.name}>{state.name}</option>)}
                </select>
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default Signup