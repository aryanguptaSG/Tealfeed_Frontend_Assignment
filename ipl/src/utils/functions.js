// this function create the abbreviation for full team names
export const shortTheName = (teamName = "") => {
    if (teamName === "Punjab Kings") {
        return "PBKS";
    }
    else {
        let name = "";
        let list = teamName.split(" ");
        for (let i = 0; i < list.length; i++) {
            name += list[i][0];
        }
        return name
    }
}





// this function create list of teams from apidata
export const getTeamsList = (apiData) => {
    let teams = new Set();
    for (let i = 0; i < apiData.length; i++) {
        teams.add(apiData[i].team1);
        teams.add(apiData[i].team2);
    }

    return Array.from(teams);
}





// this function returns total matches of a perticular team and return details of last five matches of that team .
const getTotalMatch = (apiData, team) => {
    let totalMatch = 0;
    let winner = []
    for (let i = 0; i < apiData.length; i++) {
        if ((team === apiData[i].team1 || team === apiData[i].team2) && apiData[i].winner !== null) {
            totalMatch++;
            winner.push(apiData[i].winner);
        }
    }
    let lastFive = [];
    for (let i = winner.length - 1; i >= winner.length - 5; i--) {
        if (team === winner[i]) {
            lastFive.push(1);
        }
        else {
            lastFive.push(0);
        }
    }
    return { totalMatch, lastFive };
}




// this function return total wins of a team .
const getTotalWins = (apiData, team) => {
    let count = 0;
    for (let i = 0; i < apiData.length; i++) {
        if (team === apiData[i].winner) {
            count++;
        }
    }
    return count;
}


// this function generates the data for table .
export const generateData = (apiData) => {
    const teams = getTeamsList(apiData);
    let result = [];
    for (let i = 0; i < teams.length; i++) {
        const { totalMatch, lastFive } = getTotalMatch(apiData, teams[i]);
        const totalWins = getTotalWins(apiData, teams[i]);
        const totalLoss = totalMatch - totalWins;
        const totalPoints = 2 * totalWins;
        result.push({
            teamname: teams[i],
            totalMatch,
            totalWins,
            totalLoss,
            totalPoints,
            lastFive
        })
    }

    result.sort((a, b) => {
        return b.totalPoints - a.totalPoints;
    })

    return result;
}