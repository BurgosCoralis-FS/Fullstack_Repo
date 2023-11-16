import axios from "axios";

//Get teams
export const getTeams = async() => {
    return await axios.get("http://localhost:3000/api/v1/teams/")
};

//Post team
export const saveTeam = async (name, country) => {
        return await axios.post("http://localhost:3000/api/v1/teams/", {
            name: name,
            country: country
        });
    }

//Delete player
export const deleteTeam = async (
    _id,
    name, 
    country) => {
        return await axios.delete("http://localhost:3000/api/v1/teams/" + _id, {
            name: name,
            country: country
        });
    }

