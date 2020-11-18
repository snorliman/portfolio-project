import React from 'react';
import "./HomeThreeColumn.scss"

export default function HomeThreeColum() {
    const text = `Lorem ipsum dolor sit amet, consectetur adipisc
    Pellentesque vel enim a elit viverra elementuma.
    Aliquam erat volutpat.`;
    const text2 = `Lorem ipsum dolor sit amet, consectetur adipisc
    Pellentesque vel enim a elit viverra elementuma.
    Aliquam erat volutpat.`;
    const text3 = `Lorem ipsum dolor sit amet, consectetur adipisc
    Pellentesque vel enim a elit viverra elementuma.
    Aliquam erat volutpat.`;

 
    return (
        <div className="three-colum-container">
            <div className="column">
                <h2>10</h2>
                <h3>ODDANYCH WORKÓW</h3>
                <p>{text}</p>
            </div>
            <div className="column">
                <h2>5</h2>
                <h3>WSPARTYCH ORGANIZACJI</h3>
                <p>{text2}</p>
            </div>
            <div className="column">
                <h2>7</h2>
                <h3>ZORGANIZOWANYCH ZBIÓREK</h3>
                <p>{text3}</p>
            </div>

        </div>
    );
}