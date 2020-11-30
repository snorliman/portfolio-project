import React from "react";
import Pagination from "./Pagination";


export default function Fundation({posts, postData,postsPerPage, paginate, currentPage }) {
    return (
        <>
        <div className="organization-container">
        <p className="description">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, organizacji i Zbiórek, 
        z którymi współpracujemy. Możesz sprawdzić czym się zajmują, 
        komu pomagają i czego potrzebują.</p>
        <div className="organization-list">
        {posts.map((organization) => (
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
            ))}
        </div>
        </div>   
        <Pagination postsPerPage={postsPerPage} totalPosts={postData.length}   paginate={paginate} currentPage={currentPage} />
        </>
    )
}
