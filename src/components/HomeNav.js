import React from 'react';
import './HomeNav.scss';
import styled from 'styled-components';
import {Link} from 'react-scroll'


export default function HomeNav() {
    return (
        <nav>
          <ul>
            <li><Link to ="start">Start</Link></li>
            <li><Link to ="what-is-about">O co chodzi?</Link></li>
            <li><Link to ="about-us">O nas</Link></li>
            <li><Link to ="who-get-help">Fundacje i organizacje</Link></li>
            <li><Link to ="start">Kontakt</Link></li>
          </ul>
        </nav>
    )
}
