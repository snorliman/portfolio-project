import React from 'react';
import "./HomeInfoSection.scss"
import icon1 from '../assets/Icon-1.svg';
import icon2 from '../assets/Icon-2.svg';
import icon3 from '../assets/Icon-3.svg';
import icon4 from '../assets/Icon-4.svg';
import {Link} from "react-router-dom";
import {ReactComponent as Decoration} from '../assets/Decoration.svg';

export default function HomeInfoSection(){
    return (
        <section id="what-is-about"className="info-section">
            <div className="info-header">
              <h2>Wystarczą 4 proste kroki</h2>
            <Decoration/>  
            </div>
            
            <div className="home-info-contener">
            <div className="home-info-item">
            <img src={icon1}/>
              <h3>Wybierz rzeczy</h3>
              <div className="custom-line"></div>
              <p>ubrania, zabawki,</p>
              <p> sprzęt i inne</p>  
            </div>
            <div className="home-info-item">
              <img src={icon2}/>
              <h3>Spakuj je</h3>
              <div className="custom-line"></div>
              <p>skorzystaj z</p>
              <p> worków na śmieci</p>  
            </div>
            <div className="home-info-item">
            <img src={icon3}/>
              <h3>Zdecyduj komu</h3>
              <h3> chcesz pomóc</h3>
              <div className="custom-line"></div>
              <p>wybierz zaufane</p>
              <p> miejsce</p>  
            </div>
            <div className="home-info-item">
            <img src={icon4}/>
              <h3>Zamów kuriera</h3>
              <div className="custom-line"></div>
              <p>kurier przyjedzie</p>
              <p> w dogodnym terminie</p>  
            </div>
        </div>

        <div className="info-btn">
         <Link className="big-link-item" to='/login'>ODDAJ RZECZY</Link>
        </div>
        </section>

        
    );
}