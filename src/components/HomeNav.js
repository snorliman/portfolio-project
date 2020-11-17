import React from 'react';
import {Link} from 'react-scroll'


export default function HomeNav() {
    return (
        <nav>
          <ul>
            <li><Link to ="start">Start</Link></li>
            <li><Link to ="start">O co chodzi?</Link></li>
            <li><Link to ="start">O nas</Link></li>
            <li><Link to ="start">Fundacje i organizacje</Link></li>
            <li><Link to ="start">Kontakt</Link></li>
          </ul>
        </nav>
    )
}