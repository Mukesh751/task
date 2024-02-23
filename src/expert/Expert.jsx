import React from "react";
import './Expert.css';
import rightVec from '../assets/expert-vector-right.png';
import women from '../assets/women.png';
const Expert = () =>{
    return(
        <>
        <div class = "ex-out">
            <div className="expert-outermost">
                <div className="expert-container">
                    <div className="sub-exp-cont">
                        <div className="expert-text">
                            <p> Talk to our expert</p>
                            <p>Lorem ipsum dolor sit amet consectetur. Enim at porttitor nisi dui dignissim. Mattis ut <br></br> mauris tincidunt viverra. Feugiat pellentesque eu ornare mus.</p>
                            <button className="rectangular-button">Click to proceed <img src = {rightVec} /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="expert-img">
                <img src = {women}/>
            </div>
        </div>
        </>
    );
};

export default Expert;
