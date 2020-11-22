import React from 'react';

 export default function Pagination({postsPerPage, totalPosts, paginate}) {
console.log(totalPosts, postsPerPage)
    const  pageNumber = [];
    for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++ ) {
        pageNumber.push(i);
        console.log("to jest funkcja" + paginate, postsPerPage);
        
    }
    console.log(pageNumber)

    return (
 
        <nav className="paginate">
            <ul className="paginate-list">
              {pageNumber.map(number => (
                  <li key={number}>
                      <a className="btn" onClick={() => paginate(number)} >{number}</a>
                  </li>
              ))}  
            </ul>
        </nav>
        
    )
}