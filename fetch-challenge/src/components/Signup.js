import React from 'react'

function Signup({ data }) {

    return (
        <div>
            <form>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
                <input type='password' placeholder='Password' />
                <select>
                    <option value='default' disable hidden>
                        Choose your Occupation
                    </option>
                    {data.occupations.map((job) => <option key={job}>{job}</option>)}
                </select>
                <select>
                    <option value='default' disable hidden>
                        Choose your Location
                    </option>
                    {data.states.map((state) => <option key={state.name}>{state.name}</option>)}
                </select>
            </form>
        </div>
    )
}

export default Signup