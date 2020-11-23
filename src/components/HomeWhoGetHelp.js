import React from 'react';
import "./HomeWhoGetHelp.scss";
import Fundation from "./Fundation";
import {useState} from 'react';
import {ReactComponent as Decoration} from '../assets/Decoration.svg';
import {charrityData} from "../utiltis/organizationData";
import {organizationData} from "../utiltis/organizationData";
import {fundationData} from '../utiltis/organizationData';







export default function HomeWhoGetHelp() {

    const [active, setActive] = useState("fundation")
    const [posts, setPosts] = useState([...fundationData]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(3);

    const indexOffLastPost = currentPage * postsPerPage;
    const indexOffFirstPost = indexOffLastPost - postsPerPage;
    const currentPost = posts.slice(indexOffFirstPost, indexOffLastPost);

    
    const paginate = (pageNum) => {
        setCurrentPage(pageNum)
        setPostsPerPage(3);
        
    }

    const fundationButtonHandler = () => {
        setActive("fundation");
        setPosts([...fundationData]);
        setCurrentPage(1);
    }
    const organizationButtonHandler = () => {
        setActive("organization");
        setPosts([...organizationData]);
        setCurrentPage(1);
    }
    const charrityButtonHandler = () => {
        setActive("charrity");
        setPosts([...charrityData]);
        setCurrentPage(1);
    }
   
    
    return (
        <section id="who-get-help">
            <div className="who-get-header">
                <h2>Komu pomagamy?</h2>
                <Decoration className="decor"/>
                <div className="btn-container">
                    <button onClick={fundationButtonHandler} className={active === "fundation" ? "active" : "" }>Fundacjom</button>
                    <button onClick={organizationButtonHandler}className={active === "organization" ? "active" : "" }>Organizacjom pozarządowym</button>
                    <button onClick={charrityButtonHandler}className={active === "charrity" ? "active" : "" }>Lokalnym zbiórkom</button>
                </div>
            </div>
            {active === "fundation" && <Fundation postData={fundationData} posts={currentPost} postsPerPage={postsPerPage} paginate={paginate}/>}
            {active === "organization" && <Fundation postData={organizationData} posts={currentPost} postsPerPage={postsPerPage} paginate={paginate} />}
            {active === "charrity" && <Fundation postData={charrityData} posts={currentPost} postsPerPage={postsPerPage} paginate={paginate}/>}
    
        </section>
    );
}