import React from 'react'
import {Link} from 'react-router-dom'
import './PlansStyles.css'

const Plans = () => {
    return (
        <div className='plans'>
            <div className='card-container'>
                <div className='card'>
                    <h3>- Basic -</h3>
                    <span className='bar'></span>
                    <p className='btc'>$450</p>
                    <p>- 1 Day Trip -</p>
                    <p>- Stunning Ocean Views -</p>
                    <p>- Meals Included -</p>
                    <p>- Equiptment provided -</p>
                    <Link to='/contact' className='btn'>Book</Link>
                </div>
                <div className='card'>
                    <h3>- Suite -</h3>
                    <span className='bar'></span>
                    <p className='btc'>$1000</p>
                    <p>- 4 Days 3 Nights -</p>
                    <p>- Stunning Ocean Views -</p>
                    <p>- Meals Included-</p>
                    <p>- On-board Entertainment-</p>
                    <p>- Private Quarters on Cruise -</p>
                    <p>- Equiptment Provided -</p>
                    <Link to='/contact' className='btn'>Book</Link>
                </div>
                <div className='card'>
                    <h3>- Executive -</h3>
                    <span className='bar'></span>
                    <p className='btc'>$1500</p>
                    <p>- 6 Days 5 Nights -</p>
                    <p>- Stunning Ocean Views -</p>
                    <p>- Meals Included-</p>
                    <p>- On-board Entertainment-</p>
                    <p>- Nature Activities-</p>
                    <p>- Private Luxury Quarters on Cruise -</p>
                    <p>- Equiptment Provided -</p>
                    <Link to='/contact' className='btn'>Book</Link>
                </div>
            </div>
        </div>
    )
}

export default Plans
