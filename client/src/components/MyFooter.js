import React from 'react';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import FooterBtn from './buttons/FooterBtn';
import styled from 'styled-components';

const MyFooter = props => {
    return(
        <footer>
            <div style={styles.container}>
                <div>
                    <img src={props.logo} alt={props.alt} style={styles.img}></img>
                </div>

                <div>
                    <h5>Company</h5>
                    <p>Blog</p>
                    <p>Careers</p>
                    <p>News</p>
                </div>

                <div>
                    <h5>Resources</h5>
                    <p>Documentation</p>
                    <p>Help Center</p>
                    <p>Press Conferences</p>
                </div>

                <div>
                    <h5>Get the app</h5>
                    <FooterBtn android={'Android'} apple={'iOS'} />
                </div>
            </div>

            <div style={styles.bottom}>
                <p><AiOutlineCopyrightCircle /> 2023 Oddinary Inc. All rights reserved.</p>
                <Button> Terms of Service </Button>
                <Button> Privacy Policy</Button>
                <Button> Cookies </Button>
            </div>
        </footer>
    )
}

export default MyFooter;

const Button = styled.button`
    color: black;
    background: transparent;
    border: none;
    font-size: 16px;
`

const styles ={
    container:{
        padding: '1%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        background: 'black',
        color: 'rgb(71, 150, 77)'
    },
    img:{
        width: '15%',
        marginTop: '2%'
    },
    bottom:{
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingLeft: '1%',
        alignItems: 'center'
    }
}