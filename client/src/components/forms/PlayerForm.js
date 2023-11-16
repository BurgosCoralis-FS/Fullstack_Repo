import React from "react";
import MyBtn from "../buttons/MyBtn";
import MyInput from '../../MyInput';

const PlayerForm = (props) => {
    return (
        <form onSubmit={props.addPlayer} style={styles.myForm}>
            <div style={styles.user}>
                <p style={styles.text}>Create a Player</p>
            </div>

            <div>
                <MyInput
                    id='name'
                    inputType="text"
                    name="name"
                    value={props.name}
                    onChange = {props.nameInput}
                    placeholder="Name"
                    style= {styles.input}
                />

                <MyInput
                    id='username'
                    inputType="text"
                    name="username"
                    value={props.username}
                    onChange = {props.usernameInput}
                    placeholder="Username"
                    style= {styles.input}
                />

                <MyInput
                    id='age'
                    inputType="number"
                    name="age"
                    value={props.age}
                    onChange = {props.ageInput}
                    placeholder="Age"
                    style= {styles.input}
                />

                <MyInput
                    id='birthday'
                    inputType="date"
                    name='birthday'
                    value={props.birthday}
                    onChange = {props.birthdayInput}
                    style= {styles.input}
                />

                <MyInput
                    id='team'
                    inputType="text"
                    name="team"
                    value={props.team}
                    onChange = {props.teamInput}
                    placeholder="Team"
                    style= {styles.input}
                />

                {/* <MyInput
                    id='game'
                    inputType="text"
                    name='game'
                    value={props.game}
                    onChange = {props.gameInput}
                    placeholder="Game"
                    style= {styles.input}
                /> */}

                {/* <select 
                id='game'
                name='game'
                style={styles.input}
                onChange={props.gameInput}>
                    <option>Select a Game</option>
                    <option value='League of Legends'>League of Legends</option>
                    <option value='Overwatch'>Overwatch</option>
                    <option value='Rainbow 6 Siege'>Rainbow 6 Siege</option>
                    <option value='Valorant'>Valorant</option>
                </select> */}
                <select 
                id={'game'} 
                name="game" 
                style={styles.input} 
                onChange={props.gameInput}>

                    <option value="none">Select a Game</option>
                    <option value="League of Legends">League of Legends</option>
                    <option vale='Overwatch'>Overwatch</option>
                    <option value="Rainbow 6 Siege">Rainbow 6 Siege</option>
                    <option value='Valorant'>Valorant</option>
                </select>

                <select 
                id={'role'} 
                name="role" 
                style={styles.input} 
                onChange={props.roleInput}>

                    <option value="none">N/A</option>
                    <option value="Top">Top</option>
                    <option vale='Jungle'>Jungle</option>
                    <option value="Mid">Mid</option>
                    <option value='ADC'>ADC</option>
                    <option value='Support'>Support</option>
                    <option value='Tank'>Tank</option>
                    <option value='DPS'>DPS</option>
                </select>

                <MyInput
                    id='country'
                    inputType="text"
                    name='country'
                    value={props.country}
                    onChange = {props.countryInput}
                    placeholder="Country"
                    style= {styles.input}
                />
            </div>
            <MyBtn btnText={'Submit'}{...props} />
        </form>
    );
};

export default PlayerForm;

const styles = {
    myForm: {
        backgroundColor: "black",
        color: "rgb(71, 150, 77)",
        display: "flex",
        flexDirection: "column",
        width: "715px",
        borderRadius: "8px",
        padding: "2%",
        height: "auto",
        marginTop: "5%",
        marginBottom: "5%",
        boxShadow: "1px 6px 1px 1px rgba(0, 0, 255, .1)",
    },
    user: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        marginTop: "5%",
        marginLeft: "5%",
    },
    text: {
        marginLeft: "5%",
        fontWeight: "bold",
        fontSize: "20px",
    },
    input: {
        padding: "2%",
        marginTop: "0.5%",
        marginLeft: "13%",
        width: "70%",
        border: "2px solid white",
        fontSize: "15px",
    },
};