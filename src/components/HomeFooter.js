import React from 'react';
import fbIcon from "../assets/Facebook.svg";
import igIcon from "../assets/Instagram.svg";
import "./HomeFooter.scss";

export default function HomeFooter() {
    return (
        <div className="footer">
            <div className="footer-text-container">
               <p>Copyright by CodersLab</p> 
            </div>
            
            <div className="icon-container">
                <img alt="facebook" src={fbIcon}/>
                <img alt="instagram" src={igIcon}/>
            </div>
        </div>
    );
}