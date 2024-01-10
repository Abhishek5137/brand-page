import React from 'react'
import './Herosec.css'
const Herosec = () => {
  return (
    <>
    <main className='hero'>
        <div className='hero-content'>
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>
                YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH 
                OUR SHOES .YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH 
                OUR SHOES .
            </p>
            <div className="hero-btn">
                <button>Shop Now</button>
                <button className='sec-btn'> Category </button>
            </div>
            <div className='shopping'>
                <p>Also Available On</p>
                <div className='brand-icon'>
                    <img src="/images/amazon.png" alt="" />
                    <img src="/images/flipkart.png" alt="" />
                </div>

            </div>
            </div>
            <div className='hero-image'>
                <img src="/images/hero-image.png" alt="" />
            </div>
  
    </main>
    </>
  )
}

export default Herosec;
