import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import "./AllLeagues.css"
import { useHistory } from 'react-router-dom';
<meta name="viewport" content="width=device-width, initial-scale=1"></meta>


const AllLeagues = (props) => {
    const {strLeague,strSport,idLeague} = props.league

    const history = useHistory()
    const handleClick =(leagueId) =>{
      const url = `/league/${leagueId}`
      history.push(url)
    }
    return (
      <div className="AllLeaguesStyle">
          <h3>{strLeague}</h3>
          <p>Sports type :{strSport}</p>
          <button className="btn-success" onClick={()=>handleClick(idLeague)}>
            Explore <FontAwesomeIcon icon={faArrowRight}/>
          </button>
          
      </div>
    
    );
};

export default AllLeagues;