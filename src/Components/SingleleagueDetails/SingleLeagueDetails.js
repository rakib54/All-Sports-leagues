import React from 'react';
import "./SingleLeagueDetails.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag,faFutbol,faMars,faMapMarker } from '@fortawesome/free-solid-svg-icons'


const SingleLeagueDetails = (props) => {
    const {strLeague,intFormedYear,strCountry,strSport,strGender} =props.details
  
    const gender = strGender === "Male" ? <img src="https://i.ibb.co/Bf97XJV/Rectangle-28.png" alt=""/>
    : strGender==="Mixed" ? <img src="https://i.ytimg.com/vi/xh99n-CRP7o/maxresdefault.jpg" alt=""/>:
    <img src="https://i.ibb.co/rv5JPJF/female.png" alt=""/>

    return (
        <div className="Details d-flex justify-content-around">
            <div className="col-md-5">
                <h4>{strLeague}</h4>
                <p><FontAwesomeIcon icon={faMapMarker}/> <b>Founded</b> :{intFormedYear}</p>
                <p><FontAwesomeIcon icon={faFlag}/> <b>Country</b>  :{strCountry}</p>
                <p><FontAwesomeIcon icon={faFutbol}/> <b>Sport Type</b> :{strSport}</p>
                <p><FontAwesomeIcon icon={faMars}/> <b>Gender:</b> {strGender}</p>
            </div>
            <div className="col-md-7">
                {
                    gender
                }
            </div>
            
        </div>
    );
};

export default SingleLeagueDetails;