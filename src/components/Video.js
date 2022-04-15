import React from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.css'

import oceanVideo from '../assets/ocean.mp4'

const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={oceanVideo} type='video/mp4' />
            </video>
            <div className='content'>
                <h1>Deep Sea Dive.</h1>
                <p>Explore the magic of the deep seas.</p>
                <div>
                    <Link to='/training' className='btn'>Training</Link>
                    <Link to='/contact' className='btn btn-light'>Dive</Link>
                </div>
            </div>
        </div>
    )
}

export default Video
