import React from "react";
import MyBtn from "../buttons/MyBtn";
import MyInput from '../../MyInput';

const TeamForm = (props) => {
    return (
        <form onSubmit={props.addTeam} style={styles.myForm}>
            <div style={styles.user}>
                <p style={styles.text}>Create a Team</p>
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

export default TeamForm;

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