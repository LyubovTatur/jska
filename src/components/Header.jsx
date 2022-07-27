import React from 'react';
import kuromiPic from "../images/kuromi_heart.png";
import starPic from "../images/star.png";
import '../header.scss'
const Header = () => {
    return (
        <header>
            <img src={kuromiPic} alt="no pic" id='kuromi'/>
            <div className="stars">
                <img src={starPic} alt="star" class='animated' id='star'/>
                <img src={starPic} alt="star" class='animated' id='star'/>
                <img src={starPic} alt="star" class='animated' id='star'/>
                <img src={starPic} alt="star" class='animated' id='star'/>
                <img src={starPic} alt="star" class='animated' id='star'/>
            </div>
        </header>
    );
};

export default Header;