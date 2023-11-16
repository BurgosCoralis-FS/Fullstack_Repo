import React, { useEffect, useState } from "react";
import { getTeams, saveTeam, deleteTeam } from "../services/TeamService";
import TeamList from "../components/TeamList";
import TeamForm from "../components/forms/TeamForm";

function Teams(){
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [resp, setResp] = useState('');
    const [teams, setTeams] = useState([]);
    const [team, setTeam] = useState({});

    useEffect(() => {
        //display team list
        getTeams()
            .then(res => {
                console.log(res.data.data)
                setTeams(res.data.data)
            }).catch(err => {
                console.log(err.message)
            })
    }, [setTeam, team]);

    //acquiring user inputs
    const nameInput = e => {
        setName(e.target.value)
    }

    const countryInput = e => {
        setCountry(e.target.value)
    }

    //saving Team
    const addTeam = e => {
        e.preventDefault();
        saveTeam(
            name,
            country,
        ).then(result => {
            setName('');
            setCountry('');
            setResp(result.data.message)
            setTeam(result.data.result)
            e.target.reset();
        }).catch(err => {
            setResp(`Error: ${err.message}`)
        });
    };

    //delete team
    const removeTeam = (_id) => {
        const newList = teams.filter((team) => _id !== team._id);
        setTeams(newList);
        deleteTeam(_id);
    }

    return(
        <section style={styles.main}>
            <div style={styles.post}>
                <TeamForm 
                nameInput={nameInput}
                countryInput={countryInput} 
                addTeam={addTeam} />

                <TeamList teams={teams} removeTeam={removeTeam} />
            </div>
        </section>
    )
};

export default Teams;

const styles = {
    main:{
    display:'flex',
    flexDirection:'column',
    justifyContent: 'space-between',
    margin: '5%'
    },
    post:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    },
}