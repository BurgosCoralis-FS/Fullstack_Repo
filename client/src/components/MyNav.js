import React from "react";
import { Link } from "react-router-dom";

const MyNav = props =>{
    return (
        <nav style={styles.myNav}>
            <Link to="/players" style={styles.link}>{props.nav1}</Link>
            <Link to='/teams' style={styles.link}>{props.nav2}</Link>
        </nav>
    )
}

export default MyNav;

const styles = {
    myNav: {
        display:'flex',
        flexDirection: 'column',
        backgroundColor: 'black',
        width: 'auto',
        paddingRight: '2%',
        paddingLeft: '2%',
        paddingTop: '10%',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: '20px',
        height: 'auto',
        textAlign: 'center'
    },
    link:{
        color: 'rgb(71, 150, 77)',
        fontSize: '1.7rem',
        textDecoration: 'none',
        paddingTop: '10%'
    }
}