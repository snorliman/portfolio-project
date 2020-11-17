import React from 'react';
import {Link} from 'react-router-dom';
import './HomeHeader.scss'
import HomeHero from "../assets/Home-Hero-Image.jpg"
import HomeNav from './HomeNav';

export default function HomeHeader() {
    return (
        <div className="header-container">
            <img src={HomeHero}></img>
            <div id ="start">
                <div>
                <Link to='/login'>Zaloguj</Link>
                <Link to='/registration'>Załóż konto</Link>
                </div>
                <HomeNav/>
            </div>
            <div>
                <h1>Zacznij pomagać
                    Oddaj niechciane rzeczy w zaufane ręce
                </h1>
                <svg></svg>
                <div>
                    <button>
                        <Link to='/login'>ODDAJ RZECZY</Link>
                    </button>
                    <button>
                        <Link to='/login'>ZORGANIZUJ ZBIÓRKĘ</Link>
                    </button>
                </div>   
            
            </div>
        </div>
    )
}  