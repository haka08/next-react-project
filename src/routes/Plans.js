import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PlanCards from '../components/Plans'
import HeroImage from '../components/HeroImage'

const Plans = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='PLANS.' text='Choose your trip.' />
            <PlanCards />
            <Footer />
        </div>
    )
}

export default Plans
