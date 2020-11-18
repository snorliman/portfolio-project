import React from 'react'
import people from "./../assets/People.jpg";
import "./HomeAboutUs.scss";
import {ReactComponent as Decoration} from '../assets/Decoration.svg';
import signature from "./../assets/Signature.svg";

export default function HomeAboutUs(){
    return (
        <section id="about-us">
            <div className="about-us-container">
                <div className="about-us-content">
                    <h2>O nas</h2>
                    <Decoration/>
                    <p>Nori grape silver beet broccoli kombu beet 
                        greens fava bean potato quandong celery. 
                        Bunya nuts black-eyed pea prairie turnip
                         leek lentil turnip greens parsnip.</p>
                         <img src={signature}/>
                </div>
            </div>
            <img className="about-us-picture" src={people}/>
        </section>
    );
}