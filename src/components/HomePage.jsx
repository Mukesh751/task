import React from 'react'
import { Zap, Banknote, Timer, MoveRight } from 'lucide-react'
import Navbar from './Navbar'
import girlImg from "../assets/girl_img.jpeg"
import LoanSection from './LoanSection'


export default function HomePage() {
  return (
    <>
     <Navbar/>
      <div className='home'>
        <div className='left-section'>
          <div className='intro-section'>
            <h1>Simplify Your Finances, amplify your life</h1>
            <p>Embark your financial journey with CreditSea. We're here to <br /> support your needs & dreams.</p>
          </div>

          <div className='feature-section'>
            <div>
              <div className='icon'>
                <Zap color='orange' />
              </div>
              <p>Transfer to <br /> bank in seconds</p>
            </div>

            <div>
              <div className='icon'>
                <Banknote color='orange' />
              </div>
              <p>Cash without <br /> collateral</p>
            </div>

            <div>
              <div className='icon'>
                <Timer color='orange' />
              </div>
              <p>Repay in <br /> 3-36 months</p>
            </div>
          </div>

          <button className='get-started-btn'>
            Get Started Now <MoveRight />
          </button>

          <div className='small-info-section'>
            <div className='active-users-section'>
              <h1>500k+</h1>
              <p>Active Users</p>
            </div>

            <div className='separator-div' />

            <div className='used-services-section'>
              <div>
                <img src="https://avatars.githubusercontent.com/u/124599?v=4" />
                <img src="https://avatars.githubusercontent.com/u/107113353?v=4" />
                <img src="https://avatars.githubusercontent.com/u/124599?v=4" />
                <img src="https://avatars.githubusercontent.com/u/107113353?v=4" />
              </div>
              <p>Used our services</p>
            </div>

            <div className='separator-div' />

            <div className='faq-section'>
              <h1>FAQs <MoveRight className='ml-3' /></h1>
              <p>Get Answers Here!</p>
            </div>
          </div>
        </div>

        <div className='right-section'>
          <img src={girlImg} alt='girl-img' />
        </div>
      </div>

      <LoanSection />
    </>
  )
}
