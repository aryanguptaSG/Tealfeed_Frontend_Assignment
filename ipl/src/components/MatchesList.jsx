import React from 'react'
import MatchCard from './MatchCard';

function MatchesList({
    data
}) {
    return (
        <div className='match-list'>
            <div>
                {
                    data.map((item, id) => {
                        return (
                            <MatchCard
                                key={id}
                                firstTeam={item.team1}
                                secondTeam={item.team2}
                                date={item.date}
                                index={id + 1}
                                winner={item.winner}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MatchesList;
