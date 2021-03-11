import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import SingleLeagueDetails from '../SingleleagueDetails/SingleLeagueDetails';
import "./LeagueDetails.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF ,faTwitter,faYoutube} from '@fortawesome/free-brands-svg-icons';


const LeagueDetails = () => {
    const {leagueId} = useParams();
    const [leagueDetails , setDetails] = useState({})
    useEffect(()=>{
        const url =`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`
        fetch(url)
        .then(res =>res.json())
        .then(data =>setDetails(data.leagues[0]))
    },[leagueId])
    return (
        <div className="SingleStyle">
            <div className="LeagueImg ">
                <img src={leagueDetails.strLogo} alt=""/>
            </div>
            <div className="P-Style">
                <SingleLeagueDetails details ={leagueDetails}></SingleLeagueDetails>
                <p>{leagueDetails.strDescriptionEN}</p>
            </div>
            <div className=" Social d-flex justify-content-center">
                    <a href={`https://${leagueDetails.strTwitter}`} target="_blank">
                        <FontAwesomeIcon icon={faTwitter} size="3x"/></a>
                    <a href={`https://${leagueDetails.strFacebook}`} target="_blank">
                        <FontAwesomeIcon icon={faFacebookF} size="3x" /></a>
                    <a href={`https://${leagueDetails.strYoutube}`} target="_blank">
                        <FontAwesomeIcon icon={faYoutube} size="3x" /></a>
            </div>
            
        </div>
    );
};

export default LeagueDetails;