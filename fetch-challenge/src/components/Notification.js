import React from 'react'
import { Link } from 'react-router-dom'

function Notification() {
    return (
        <div className='notification'>
            <p>Thank you for signing up! If this were a real app, this is when I'd tell you to go check your email and verify your account so that you can keep using our amazing product!</p>
            <Link to='/'><button>Back Home</button></Link>
        </div>

    )
}

export default Notification