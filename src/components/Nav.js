import React from 'react';
import './Nav.scss';
import {Link as LinkRoute} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';


export default function Nav() {
    return (
    <>    
      <div className="header-login">
      <LinkRoute className="link-item" to='/logowanie'>Zaloguj</LinkRoute>
      <LinkRoute className='link-item link-reg' to='/rejestracja'>Załóż konto</LinkRoute>
      </div>
        <nav className="nav-header">
          <ul>
            <li><Link to ="/#start" className="nav-link">Start</Link></li>
            <li><Link to ="/#what-is-about" className="nav-link">O co chodzi?</Link></li>
            <li><Link to ="/#about-us" className="nav-link">O nas</Link></li>
            <li><Link to ="/#who-get-help" className="nav-link">Fundacje i organizacje</Link></li>
            <li><Link to ="/#contact-us" className="nav-link">Kontakt</Link></li>
          </ul>
        </nav>
    </>
    )
}
