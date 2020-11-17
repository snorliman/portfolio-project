import React from 'react';
import HomeHeader from "../components/HomeHeader"
import HomeMainSection from "../components/HomeMainSection"
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
            <HomeMainSection/>
            <HomeThreeColumn/>
            <HomeInfoSection/>
            <HomeAboutUs/>
            <HomeWhoGetHelp/>
            <HomeContact/>
            <HomeFooter/> 
        </div>
    )
}
