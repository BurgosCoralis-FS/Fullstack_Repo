import React from "react";
import { AiFillApple, AiFillAndroid } from 'react-icons/ai';
import { styled } from 'styled-components';

const FooterBtn = props => {
    return(
        <div>
            <Button><AiFillAndroid/> {props.android}</Button>
            <Button><AiFillApple/> {props.apple}</Button>
        </div>
    )
}

export default FooterBtn;

const Button = styled.button`
display: inline-block;
margin-top: 5%;
color: black;
background: rgb(71, 150, 77);
border: none;
border-radius: 40px;
font-size: 1rem;
width: 90%;
padding: 5%;
cursor: pointer;
&:hover{
    background: rgb(237,237,237);
};
&:active{
    background: rgb(211,211,211);
}
`