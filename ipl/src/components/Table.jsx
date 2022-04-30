import React, { useState, useEffect } from 'react'
import { generateData, shortTheName } from "../utils/functions";
import SuccessIcon from '../assets/icons/SuccessIcon';
import crossIcon from "../assets/images/crossIcon.png";

function Table({
    apiData
}) {
    // data to show in table
    const [data, setdata] = useState([])
    useEffect(() => {
        setdata(generateData(apiData));
    }, [apiData]);



    return (
        <div className='table'>
            <div>
                <table>
                    <tr>
                        <th className='team'>Team</th>
                        <th>M</th>
                        <th>W</th>
                        <th>L</th>
                        <th>Pts</th>
                        <th>Last 5</th>
                    </tr>
                    {
                        data.length && data.map((item, id) => {
                            return (
                                <tr key={id}>
                                    <td className='team-td'>
                                        <span style={{
                                            marginRight: "5px"
                                        }}>{id + 1 + "  "}</span>
                                        {shortTheName(item.teamname)}</td>
                                    <td>{item.totalMatch}</td>
                                    <td>{item.totalWins}</td>
                                    <td>{item.totalLoss}</td>
                                    <td>{item.totalPoints}</td>
                                    <td>
                                        <div className='last-five'>
                                            {
                                                item.lastFive.map((item, id) => {
                                                    return (
                                                        <div key={id}>
                                                            {item ?
                                                                <SuccessIcon backgroundFill="
                                                            #47a860"/>
                                                                :
                                                                <img className='cross-icon' src={crossIcon} alt="cross-icon" />}
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </div>
    )
}

export default Table;
