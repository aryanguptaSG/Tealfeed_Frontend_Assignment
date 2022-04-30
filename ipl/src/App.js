import { useState, useEffect } from "react";
import Header from "./components/Header";
import MatchesList from "./components/MatchesList";
import Table from "./components/Table";
import './App.css';
import { shortTheName } from "./utils/functions";

function App() {
  const [selectedNavItem, setselectedNavItem] = useState("MATCHES");


  // teams list selected by user in multiselect input box .
  const [selectedTeams, setselectedTeams] = useState([]);

  // data after filtering the apidata accoridng to the selected teams.
  const [data, setdata] = useState([]);

  // apiData returned from api
  const [apiData, setapiData] = useState([]);



  useEffect(() => {
    fetch("https://gist.githubusercontent.com/hdck007/57650c774d9631c097db855bf110a4b6/raw/58b00de2a8c06831fda2f471e1b635a90208a4be/ipl.json")
      .then(response => response.json())
      .then(result => {
        setapiData(result);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);


  useEffect(() => {
    if (selectedTeams.length === 0) {
      setdata(apiData);
    }
    else {
      const filteredList = []
      apiData.map((item, id) => {
        let team1 = shortTheName(item.team1);
        let team2 = shortTheName(item.team2);
        if (selectedTeams.includes(team1) && selectedTeams.includes(team2)) {
          filteredList.push(item);
        }
        return false;
      })

      setdata(filteredList);
    }
  }, [apiData, selectedTeams]);


  return (
    <div className="App">
      <Header
        selectedNavItem={selectedNavItem}
        setselectedNavItem={setselectedNavItem}
        apiData={apiData}
        setselectedTeams={setselectedTeams}
      />

      {apiData.length && <div style={{
        paddingTop: "5px"
      }}>
        {
          selectedNavItem === "MATCHES" ?
            <MatchesList data={data} />
            :
            <Table apiData={apiData} />
        }
      </div>}
    </div>
  );
}

export default App;
