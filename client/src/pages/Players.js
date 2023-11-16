import React, { useState, useEffect } from 'react';
import { getPlayers, savePlayer, deletePlayer } from "../services/PlayerService";
import PlayerList from '../components/PlayerList';
import PlayerForm from '../components/forms/PlayerForm';

function Players() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [age, setAge] = useState("");
    const [birthday, setBirthday] = useState('');
    const [team, setTeam] = useState("");
    const [game, setGame] = useState("");
    const [role, setRole] = useState("");
    const [country, setCountry] = useState("");
    const [resp, setResp] = useState('');
    const [players, setPlayers] = useState([]);
    const [player, setPlayer] = useState({});

    useEffect(() => {
        //display player list
        getPlayers()
        .then(res => {
            // console.log('getPlayer', res.data.data)
            setPlayers(res.data.data)
        })
        .catch(err => {
            console.log(err.message);
        })
    }, [setPlayer, player]);

  //acquiring user inputs
    const nameInput = e => {
        setName(e.target.value);
    };

    const usernameInput = e => {
        setUsername(e.target.value);
    };

    const ageInput = e => {
        setAge(e.target.value);
    };

    const birthdayInput = e => {
        setBirthday(e.target.value)
    }

    const teamInput = e => {
        setTeam(e.target.value);
    };

    const gameInput = e => {
        setGame(e.target.value);
    };

    const roleInput = e => {
        setRole(e.target.value);
    };

    const countryInput = e => {
        setCountry(e.target.value);
    };

  //saving player
    const addPlayer = e => {
        e.preventDefault();
        savePlayer(
        name,
        username,
        age,
        birthday,
        team,
        game,
        role,
        country
    ).then(result => {
        setName('');
        setUsername('');
        setAge("");
        setBirthday("");
        setTeam("");
        setGame("");
        setRole("");
        setCountry("");
        setResp(result.data.message);
        setPlayer(result.data.result);
        e.target.reset();
    })
    .catch(err => {
        setResp(`Error: ${err.message}`)
    })
}

  //delete player
    const removePlayer = (_id) => {
        console.log(_id)
        const newList = players.filter((player) => _id !== player._id)
        setPlayers(newList)
        deletePlayer(_id)}

    return (
        <section style={styles.main}>
        <div style={styles.post}>
            <PlayerForm
            nameInput={nameInput}
            usernameInput={usernameInput}
            ageInput={ageInput}
            birthdayInput={birthdayInput}
            teamInput={teamInput}
            gameInput={gameInput}
            roleInput={roleInput}
            countryInput={countryInput}
            addPlayer={addPlayer}
            />

            <PlayerList players={players} removePlayer={removePlayer}/>
        </div>
    </section>
    );
}

export default Players;

const styles={
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