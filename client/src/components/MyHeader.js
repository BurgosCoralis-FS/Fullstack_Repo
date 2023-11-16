import React from "react";
import MyAvatar from "./MyAvatar";
import Image from '../images/tw_pfpver2.png';
import Bell from '../images/bell.png'
import { FaSearch } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';
import { BiSolidCog } from 'react-icons/bi';
import { Link } from "react-router-dom";
import Notifications from "react-notifications-menu";

//https://react-notifications-menu.netlify.app/

const MyHeader = props =>{
    const data = {
        data:[{
            image: Image,
            message: (<p>Posted a {' '}
                        <span style={styles.text}>photo</span>.</p>),
            detailPage: '/',
            receivedTime: '3h ago'
        },
        {
            image: Image,
            message: (<p>Shared a {' '}
                        <span style={styles.text}>post</span> with you.</p>),
            detailPage: '/',
            receivedTime: '5h ago'
        },
        {
            image: Image,
            message: (<p>Sent you a {' '}
                        <span style={styles.text}>message</span>.</p>),
            detailPage: '/',
            receivedTime: '6h ago'
        },
        {
            image: Image,
            message: (<p>Left a {' '}
                        <span style={styles.text}>comment</span> under your {' '}
                        <span style={styles.text}>post</span>.</p>),
            detailPage: '/',
            receivedTime: '8h ago'
        }
    ]}

    return (
        <header style={styles.myHeader}>
            <div style={styles.left}>
                <img src={props.title} alt={props.alt} style={styles.img}></img>
            </div>

            <div style={styles.searchContainer}>
                <span style={styles.searchIcon}><FaSearch /></span>
                <input type='text' placeholder='Search...' style={styles.inputWithIcon}></input>
            </div>

            <div style={styles.right}>
                <Link to='/messages' style={styles.icons}><FaMessage /></Link>
                <Link style={styles.icons}><Notifications 
                                                data={data.data}
                                                height='auto'
                                                width='20%'
                                                headerBackgroundColor='white'
                                                header={
                                                    {
                                                        title: 'Notifications',
                                                        option: {text: 'Mark all as read', onClick: () => console.log('Clicked')}
                                                    }
                                                }
                                                icon={Bell}
                                                style={styles.bell}/>
                </Link>
                {/* <Link to='/notifications' style={styles.icons}><FaBell /></Link>  */}
                <Link to="/settings" style={styles.icons}><BiSolidCog /></Link>
                <Link to="/settings"><MyAvatar AvatarIcon={Image} alt='Profile image icon' /></Link>
            </div>
        </header>
    )
}

export default MyHeader

const styles = {
    myHeader: {
        padding: '1%',
        backgroundColor: 'black',
        color: 'rgb(71, 150, 77)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '1px 6px 1px 1px rgba(0, 0, 255, .1)'
    },
    left: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: '1%'
    },
    img:{
        width: '18%'
    },
    searchContainer: {
        border: '1px solid #ddd',
        display: 'flex',
        flexDirection: 'row',
        borderRaidus: '2px',
        width: '20%'
    },
    searchIcon: {
        background: '#ddd',
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        fontSize: '1rem'
    },
    inputWithIcon: {
        border: 'none',
        flex: 1,
        padding: '10px'
    },
    right: {
        display: 'flex',
        flexDirection: 'row'
    },
    icons: {
        background: 'transparent',
        border: 'none',
        color: 'rgb(71, 150, 77)',
        padding: '10px',
        fontSize: '1.5rem',
        cursor: 'pointer',
    },
    text:{
        color: '#0000FF'
    },
    bell:{
        fontSize: '1rem',
        border: '2px solid gray',
        boxShadow: '1px 6px 1px 1px rgba(0, 0, 255, 0.1)'
    }
}