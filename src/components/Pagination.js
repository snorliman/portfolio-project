import React from 'react';

 export default function Pagination({postsPerPage, totalPosts, paginate, currentPage}) {
    const  pageNumber = [];
    for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++ ) {
        pageNumber.push(i);
        
    }


    return (
 
        <nav className="paginate">
            <ul className="paginate-list">
              {pageNumber.map(number => (
                  <li key={number}>
                      <button className={number === currentPage ? "btn active-btn" : "btn" } onClick={() => paginate(number)} >{number}</button>
                  </li>
              ))}  
            </ul>
        </nav>
        
    )
}