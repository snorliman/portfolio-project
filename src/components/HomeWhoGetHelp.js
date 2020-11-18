import React from 'react';
import "./HomeWhoGetHelp.scss";
import {useState} from 'react';
import {ReactComponent as Decoration} from '../assets/Decoration.svg';

const Fundation = () => {
    return (
        <div className="organization-container">
        <p className="description">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, 
        z którymi współpracujemy. Możesz sprawdzić czym się zajmują, 
        komu pomagają i czego potrzebują.</p>
        <div className="organization-list">
            <div className="organization">
                <span>Fundacja "Przyjazna"</span>
                <p>ubrania, jedzenie, meble</p>
            </div>
            <div className="custom-line"></div>
            <div className="organization">
                <span>Fundacja "Dla Starszych"</span>
                <p>ubrania, jedzenie, meble, AGD</p>
            </div>
            <div className="custom-line"></div>
            <div className="organization">
                <span>Fundacja "Bez Domu"</span>
                <p>ubrania, jedzenie, meble, koce</p>
            </div>
        </div>
        </div>   
    )
}
const OrganizationNonProfit = () => {
    return (
        <div className="organization-container">
        <p className="description">W naszej bazie znajdziesz listę zweryfikowanych Organizacji pozarządowych, 
        z którymi współpracujemy. Możesz sprawdzić czym się zajmują, 
        komu pomagają i czego potrzebują.</p>
        <div className="organization-list">
            <div className="organization">
                <span>Organizacja Wspieraj Ekologie</span>
                <p>ubrania, jedzenie, meble, AGD</p>
            </div>
            <div className="custom-line"></div>
            <div className="organization">
                <span>Organizacja Pomocy Bezdomnym Osobom</span>
                <p>ubrania, jedzenie, meble, koce, kurtki</p>
            </div>
            <div className="custom-line"></div>
            <div className="organization">
                <span>Organizacja Wspieram</span>
                <p>ubrania, jedzenie, meble, koce</p>
            </div>
        </div>
        </div>   
    )
}
const Charrity = () => {
    return (
        <div className="organization-container">
        <p className="description">W naszej bazie znajdziesz listę zweryfikowanych zbiórek, 
        które wspieramy. Możesz sprawdzić czym się zajmują, 
        komu pomagają i czego potrzebują.</p>
        <div className="organization-list">
            <div className="organization">
                <span>Zbiórka "Oddaj co nie nosisz"</span>
                <p>ubrania, kórtki</p>
            </div>
            <div className="custom-line"></div>
            <div className="organization">
                <span>Zbiórka "Nie wyrzucaj Jedzenia!"</span>
                <p>jedzenie</p>
            </div>
            <div className="custom-line"></div>
            <div className="organization">
                <span>Zbiórka "Graty to skarby"</span>
                <p>ubrania,AGD, meble, koce</p>
            </div>
        </div>
        </div>   
    )
}



export default function HomeWhoGetHelp() {
    const [active, setActive] = useState("fundation")
    return (
        <section id="who-get-help">
            <div className="who-get-header">
                <h2>Komu pomagamy?</h2>
                <Decoration className="decor"/>
                <div className="btn-container">
                    <button onClick={() => setActive("fundation")} className={active === "fundation" ? "active" : "" }>Fundacjom</button>
                    <button onClick={() => setActive("organization")}className={active === "organization" ? "active" : "" }>Organizacjom pozarządowym</button>
                    <button onClick={() => setActive("charrity")}className={active === "charrity" ? "active" : "" }>Lokalnym zbiórkom</button>
                </div>
            </div>
            {active === "fundation" && <Fundation/>}
            {active === "organization" && <OrganizationNonProfit/>}
            {active === "charrity" && <Charrity/>}
            <div className="page-conteiner">
                <button className="btn">1</button>
                <button className="btn">2</button>
            </div>
        </section>
    );
}