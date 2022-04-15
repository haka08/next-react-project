import React from 'react'
import './TrainingStyles.css'

import {Link} from 'react-router-dom'

import equi from '../assets/equi.jpg'
import dive from '../assets/dive.jpg'

const Training = () => {
    return (
        <div className='training'>
            <div className='left'>
                <h1>Training</h1>
                <p>Thorough training is a necessity when traveling into the deep sea. 
                    We offer all inclusive training for all prospecting divers! Contact us 
                    now to book your spot!</p>
                <Link to='/contact'><button className='btn'>Contact</button></Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={dive} className='img' alt='' />
                    </div>
                    <div className='image-stack bottom'>
                        <img src={equi} className='img' alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Training
