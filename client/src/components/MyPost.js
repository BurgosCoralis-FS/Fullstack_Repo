import React from "react";
import MyAvatar from "./MyAvatar";
import { RiCloseLine } from 'react-icons/ri';
import { FiEdit3 } from 'react-icons/fi';
import MyBtn from './buttons/MyBtn';

const MyPost = props =>{
    return (
        <article style={styles.container}>
            <div style={styles.user}>
                <MyAvatar AvatarIcon={props.val.AvatarIcon} AvatarAlt={props.val.Alt} />
                <h3 style={styles.text}>{props.val.name}</h3>

                <div style={styles.button}>
                    <MyBtn onClick={props.editMe} btnText=<FiEdit3 /> />
                    <MyBtn onClick={props.delMe} btnText=<RiCloseLine />/>
                </div>
            </div> 

            <div>
                <h5 style={styles.text}>{props.val.title}</h5>
                <p style={styles.text}>{props.val.description}</p>
            </div>

            <div>
                <img src={props.val.postImg} alt={props.val.imgAlt} style={styles.image} />
            </div>
        </article>
    )
}

export default MyPost;

const styles ={
    container:{
        background: 'black',
        color: 'rgb(71, 150, 77)',
        width: 'auto',
        borderRadius: '8px',
        boxShadow: '1px 6px 1px 1px rgba(0, 0, 255, 0.1)',
        marginBottom: '5%'
    },
    user:{
        display: 'flex',
        displayDirection: 'row',
        margin: '5%'
    },
    text:{
        marginLeft: '5%',
        fontSize: '20px',
    },
    image:{
        borderRadius: '8px',
        width: '750px',
        height: 'auto',
    },
    button:{
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 'auto',
        height: '25px',
        width: '10%'
    }
}