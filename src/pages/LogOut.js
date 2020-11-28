import React from "react";
import "./LogOut.scss";
import Nav from "../components/Nav";
import {ReactComponent as Decoration} from "../assets/Decoration.svg";
import {Link} from "react-router-dom"

export default function LogOut () {
    return (
        <div className="logout">
            <div className="nav-holder">
               <Nav/> 
            </div>
            
            <div className="logout-container">
                
                    <h2>Wylogowanie nastapiło pomyślnie!</h2>
                    <Decoration className="decoration"/>
                    <Link to="/" style={{color: "#3c3c3c"}}>
                        <button className="home-btn">Strona główna</button>
                    </Link>       
            </div> 
        </div>

    )
}