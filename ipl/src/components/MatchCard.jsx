import React, { useState, useEffect } from 'react'
import { shortTheName } from "../utils/functions";

function MatchCard({
    firstTeam,
    secondTeam,
    index,
    date
}) {
    const [firstName, setfirstName] = useState("");
    const [secondName, setsecondName] = useState("");

    useEffect(() => {
        setfirstName(shortTheName(firstTeam))
        setsecondName(shortTheName(secondTeam));
    }, [firstTeam, secondTeam])


    return (
        <div className='match-card'>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <div>T20 {index} of 70</div>
                <div>{date}</div>
            </div>
            <div style={{
                marginTop: "5px",
                marginBottom: "5px"
            }}>{firstName}</div>
            <div>{secondName}</div>
        </div>
    )
}

export default MatchCard;
