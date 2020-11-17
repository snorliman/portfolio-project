import React from 'react';
import {Link} from 'react-router-dom';
import './HomeHeader.scss'
import HomeHero from "../assets/Home-Hero-Image.jpg";
import {ReactComponent as Decoration} from '../assets/Decoration.svg';
import HomeNav from './HomeNav';
import styled from 'styled-components';

export default function HomeHeader() {
    const text = "Zacznij pomagać! \n Oddaj niechciane rzeczy w zaufane ręce"
    const text2 = "ODDAJ \n RZECZY";
    const text3 = "ZRÓB \n ZBIÓRKĘ";
    let newText = text.split('\n').map(i => {
        return <p>{i}</p>
    });
    return (
        <div className="header-container">
            <img src={HomeHero}></img>
            <div id ="start">
                <div className="header-login">
                <Link className="link-item" to='/login'>Zaloguj</Link>
                <Link className='link-item link-reg' to='/registration'>Załóż konto</Link>
                </div>
                <HomeNav/>
            
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
