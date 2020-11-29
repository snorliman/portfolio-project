import React from 'react';
import {Link} from 'react-router-dom';
import './HomeHeader.scss'
import {ReactComponent as Decoration} from '../assets/Decoration.svg';
import Nav from './Nav';

export default function HomeHeader() {
    const text = `Zacznij pomagać!
     Oddaj niechciane rzeczy w zaufane ręce`
    const text2 = `ODDAJ RZECZY`;
    const text3 = `ZRÓB ZBIÓRKĘ`;
    
    return (
        <div className="header-container">
            <div id ="start">
                <Nav/>
                <div className="header-title">
                     <h1>{text}</h1>
                     <Decoration/>
                     <div className='header-btn-container'>
    <Link className="big-link-item" to='/logowanie'>{text2}</Link>
    <Link className="big-link-item" to='/logowanie'>{text3}</Link>
                   </div> 
                </div>
            </div>
        </div>
    )
}  
