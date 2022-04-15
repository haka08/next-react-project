import React from 'react'
import './FormStyles.css'

const Form = () => {
    return (
        <div className='form'>
            <form>
                <label>Name</label>
                <input type='text'></input>
                <label>Email</label>
                <input type='email'></input>
                <label>Phone</label>
                <input type='phone'></input>
                <label>Introduce yourself:</label>
                <textarea rows='6' placeholder='Tell us about yourself!' />
                <button className='btn'>Submit</button>
            </form>
        </div>
    )
}

export default Form
