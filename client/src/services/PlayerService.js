import axios from "axios";

//Get players
export const getPlayers = async() => {
    return await axios.get("http://localhost:3000/api/v1/players/")
    // .then((res) => {
    //     console.log(res.data)
    // })
};

//Post Player
export const savePlayer = async (
    name, 
    username, 
    age, 
    birthday,
    team,
    game,
    role,
    country) => {
        return await axios.post("http://localhost:3000/api/v1/players/", {
            name: name,
            username: username,
            age: age,
            birthday: birthday,
            team: team,
            game: game,
            role: role,
            country: country
        });
    }

//Edit Player
export const editPlayer = async (
    _id,
    name, 
    username, 
    age, 
    birthday,
    team,
    game,
    role,
    country) => {
        return await axios.patch("http://localhost:3000/api/v1/players/" + _id, {
            name: name,
            username: username,
            age: age,
            birthday: birthday,
            team: team,
            game: game,
            role: role,
            country: country
        });
    }

//Delete player
export const deletePlayer = async (
    _id,
    name, 
    username, 
    age, 
    birthday,
    team,
    game,
    role,
    country) => {
        return await axios.delete("http://localhost:3000/api/v1/players/" + _id, {
            name: name,
            username: username,
            age: age,
            birthday: birthday,
            team: team,
            game: game,
            role: role,
            country: country
        });
    }