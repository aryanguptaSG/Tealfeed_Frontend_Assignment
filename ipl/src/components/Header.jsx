import React, { useState, useEffect } from 'react'
import DownArrow from '../assets/icons/DownArrow';
import CloseIcon from '../assets/icons/CloseIcon';
import { Multiselect } from "multiselect-react-dropdown";
import { getTeamsList, shortTheName } from "../utils/functions"


function Header({
    selectedNavItem,
    setselectedNavItem,
    apiData,
    setselectedTeams,
}) {

    // team list to show in multiselect input box options.
    const [teamsList, setteamsList] = useState([]);
    useEffect(() => {
        const teams = getTeamsList(apiData);
        const list = [];
        teams.map((i) => {
            list.push({ team: shortTheName(i) });
            return false;
        });
        setteamsList(list);
    }, [apiData]);



    const multiselect_style = {
        multiselectContainer: {
            width: "100%",
        },
        searchBox: {
            backgroundColor: "#EEE",
            borderRadius: "20px",
            display: "flex",
            flexWrap: "wrap"
        },
        chips: {
            backgroundColor: "#148081"
        },
        option: {
            backgroundColor: "#148081"
        }
    }

    // returns the list of selected teams list from selectedList object
    const prepareList = (selectedList) => {
        const list = [];
        selectedList.map((item) => {
            list.push(item.team);
            return false;
        });
        return list;
    }

    const handleSelect = (selectedList, selectedItem) => {
        setselectedTeams(prepareList(selectedList));
    }

    const handleRemove = (selectedList, removedItem) => {
        setselectedTeams(prepareList(selectedList));
    }


    return (
        <div id="header" className='header'>
            <div className='head-1'>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <DownArrow />
                    <div>
                        IPL
                    </div>
                </div>
                {selectedNavItem === "MATCHES" && <div className='input'>
                    <Multiselect
                        options={teamsList}
                        displayValue={"team"}
                        style={multiselect_style}
                        onSelect={handleSelect}
                        onRemove={handleRemove}
                        placeholder="Enter team(s)"
                    />
                </div>}
                <div>
                    <CloseIcon />
                </div>
            </div>

            <div className='head-2'>
                <div>
                    <div
                        onClick={
                            () => { setselectedNavItem("MATCHES") }
                        }
                        className={`navItem ${selectedNavItem === "MATCHES" ? "selected" : ""}`}>
                        MATCHES
                    </div>
                    <div
                        onClick={
                            () => { setselectedNavItem("TABLE") }
                        }
                        className={`navItem ${selectedNavItem === "TABLE" ? "selected" : ""}`}>
                        TABLE
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
