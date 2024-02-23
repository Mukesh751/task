import React from "react";
import part1 from '../assets/partner1.png';
import part2 from '../assets/partner2.png';
import part3 from '../assets/partner3.png';
import part4 from '../assets/partner4.png';
import part5 from '../assets/partner5.png';

const partarr = [
    part1, part2, part3, part4, part5
];
const OurPartners = () => {
    return(
        <>
          <div className="partner">
             <div className="partner-text">
             <h2><span>Our Partners</span></h2>
             <p>Backed by <span>most trusted</span> names in the industry </p>
             </div>
             <div className="partner-img">
                <img src = {part1}/>
                <img src = {part2}/>
                <img src = {part3}/>
                <img src = {part4}/>
                <img src = {part5}/>
             </div>
          </div>
        </>
    )
}

export default OurPartners;