import React from "react";
import mobile1 from '../assets/mobile1.png';
import mobile2 from '../assets/mobile2.png';
import rightVec from '../assets/expert-vector-right.png';
const Mobile = () =>{
    return(
        <>
            <div className="mobile">
                <div className="partner-text">
                <h2><span>Money for everything you need</span></h2>
                <p>At CreditSea, we offer a range of hassle-free financial solutions tailored to your needs </p>
                </div>
                <div className="row-mob">
                    <div className = "col-50 col-mob">
                        <img src={mobile1}/>
                        <img src = {mobile2}/>
                    </div>
                    <div className="col-50">
                        <ol>
                            <li>Offering personal loans, home loans, and credit lines</li> <br></br>
                            <li>Hassle-free application and approval</li> <br></br>
                            <li>Providing competitive interest rates</li> <br></br>
                            <li>Tailored repayment plans to suit individual needs</li> <br></br>
                            <li>Helping customers achieve their financial objectives</li> <br></br>
                        </ol>
                        <button className="rectangular-button loan-button">Explore Now <img src = {rightVec} /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mobile;