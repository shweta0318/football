import React, { useState, useEffect } from "react"
import { getfootball } from "../APIs/getfootball";
import Table from 'react-bootstrap/Table';

export default function Football(){
   
    const [teams, setTeams] = useState()

    useEffect(() => {
        const fetchfootballData= async () => {
            const data = await getfootball()
            console.log(data)
            setTeams(data)
        }
        fetchfootballData()
    }, [])

    console.log(teams)

    return (
        <div >
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>Team Name</th>
          <th>Flag </th>
          <th>Country CODE</th>
          
        </tr>
      </thead>
      <tbody>
      {teams != null && teams.length ? teams.map((item, index) => (
        <tr>
            
          <td>{item.name}</td>
          <td>
            <img src={item.flag} width={250} height ={250} ></img></td>
          <td>{item.fifaCode}</td>
          
        </tr>
         )) : <span> Loading.... </span>}
       
      </tbody>
    </Table>
          
        
           
          </div>
       
       
    
          
      )
}