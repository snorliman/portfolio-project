import React from 'react';
import './Nav.scss';
import {Link as LinkRoute} from 'react-router-dom';
import {Link} from 'react-scroll'


export default function Nav() {
    return (
    <>    
      <div className="header-login">
      <LinkRoute className="link-item" to='/login'>Zaloguj</LinkRoute>
      <LinkRoute className='link-item link-reg' to='/registration'>Załóż konto</LinkRoute>
      </div>
        <nav className="nav-header">
          <ul>
            <li><Link to ="start">Start</Link></li>
            <li><Link to ="what-is-about">O co chodzi?</Link></li>
            <li><Link to ="about-us">O nas</Link></li>
            <li><Link to ="who-get-help">Fundacje i organizacje</Link></li>
            <li><Link to ="contact-us">Kontakt</Link></li>
          </ul>
        </nav>
    </>
    )
}
