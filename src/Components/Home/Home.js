import React, { useEffect, useState } from 'react';
import AllLeagues from '../AllLeagues/AllLeagues';
import "./Home.css"

const Home = () => {
    const [Leagues, setLeagues] = useState([])
    useEffect(()=>{
        fetch("https://www.thesportsdb.com/api/v1/json/1/all_leagues.php")
        .then(res => res.json())
        .then(data =>setLeagues(data.leagues))
    },[])
    return (
        <div>
            <div className="LeagueImg">
                <h1><b>SPORTS WORLD</b></h1>
            </div>
            <div className="LeagueStyle">
                {
                    Leagues.map(league =><AllLeagues league ={league} key={league.idLeague}></AllLeagues>)
                }
            </div>
            
        </div>
    );
};

export default Home;