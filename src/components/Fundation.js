import React from "react";
import Pagination from "./Pagination";
import {fundationData} from '../utiltis/organizationData';


export default function Fundation({posts,postsPerPage,paginate }) {
  
    return (
        <>
        <div className="organization-container">
        <p className="description">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, 
        z którymi współpracujemy. Możesz sprawdzić czym się zajmują, 
        komu pomagają i czego potrzebują.</p>
        <div className="organization-list">
        {(posts.map((organization) => (
                <div key={organization.name}>
                <div className="organization">
                    <div className="organization-item">
                        <span>{organization.name}</span>
                        <p>{organization.description}</p>
                    </div>
                    <p>{organization.collect}</p>
                </div>
                <div className="custom-line"></div>
                </div>
            )))}
        </div>
        </div>   
        <Pagination postsPerPage={postsPerPage} postTotal={fundationData.length}   paginate={paginate} />
        </>
    )
}
