import React from 'react';
import HomeHeader from "../components/HomeHeader"
import HomeThreeColumn from "../components/HomeThreeColumn"
import HomeInfoSection from "../components/HomeInfoSection"
import HomeAboutUs from "../components/HomeAboutUs"
import HomeWhoGetHelp from "../components/HomeWhoGetHelp"
import HomeContact from "../components/HomeContact"
import HomeFooter from "../components/HomeFooter"




export default function HomePage() {
    return (
        <div>
             <HomeHeader/>
            <HomeThreeColumn/>
            <HomeInfoSection/>
            <HomeAboutUs/>
            <HomeWhoGetHelp/>
            <HomeContact/>
            <HomeFooter/> 
        </div>
    )
}
