import React from 'react'
import rightVec from '../assets/expert-vector-right.png';
import { ArrowDownCircleIcon, CheckSquare2Icon, SmartphoneNfc } from 'lucide-react'


export default function LoanSection() {
  return (
    <>
    <div className='loan-section'>
      <h2>Loan in 3 Simple Steps</h2>

      <div className='steps-section'>
        <div className='steps'>
          <ArrowDownCircleIcon />
          <p>Download the CreditSea <br/> app, complete your profile.</p>
        </div>

        <div className='separator' />

        <div className='steps'>
          <CheckSquare2Icon />
          <p>Upload your KYC, set up <br/> automatic repayments from your <br/> bank account.</p>
        </div>

        <div className='separator' />

        <div className='steps'>
          <SmartphoneNfc />
          <p>Use CreditSea to pay when <br/> making payments at 100,000 <br/>offline and 15,000 online stores.</p>
        </div>
      </div>

      <button className="rectangular-button loan-button">Explore Now <img src = {rightVec} /></button>
    </div>
    
    </>
  )
}
