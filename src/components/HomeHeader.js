import React from 'react';
import {Link} from 'react-router-dom';
import './HomeHeader.scss'
import HomeHero from "../assets/Home-Hero-Image.jpg";
import {ReactComponent as Decoration} from '../assets/Decoration.svg';
import Nav from './Nav';

export default function HomeHeader() {
    const text = `Zacznij pomagać!
     Oddaj niechciane rzeczy w zaufane ręce`
    const text2 = `ODDAJ RZECZY`;
    const text3 = `ZRÓB ZBIÓRKĘ`;
    
    return (
        <div className="header-container">
            <img src={HomeHero}></img>
            <div id ="start">
                <Nav/>
                <div className="header-title">
                     <h1>{text}</h1>
                     <Decoration/>
                     <div className='header-btn-container'>
    <Link className="big-link-item" to='/login'>{text2}</Link>
    <Link className="big-link-item" to='/login'>{text3}</Link>
                   </div> 
                </div>
            </div>
        </div>
    )
}  
