import React from 'react';
import "./HomeWhoGetHelp.scss";
import Charrity from './Charrity';
import Fundation from "./Fundation";
import Organization from "./Organization";
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

    
    const paginate = (pageNum) => setCurrentPage(pageNum)

    const fundationButtonHandler = () => {
        setActive("fundation")
        setPosts([...fundationData])
    }
    const organizationButtonHandler = () => {
        setActive("organization")
        setPosts([...organizationData])
    }
    const charrityButtonHandler = () => {
        setActive("charrity")
        setPosts([...charrityData])
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
            {active === "fundation" && <Fundation fundationData={fundationData} posts={currentPost}/>}
            {active === "organization" && <Organization organizationData={organizationData} posts={currentPost} />}
            {active === "charrity" && <Charrity charrityData={charrityData} posts={currentPost}/>}
    
        </section>
    );
}