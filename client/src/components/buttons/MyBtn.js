import React from "react";
import styled from 'styled-components';

const MyBtn = props => {
    return (
        <Button onClick={props.onClick}>
            {props.btnText}
        </Button>
    )
}

export default MyBtn

const Button = styled.button`
    font-size: 15px;
    background: black;
    color: rgb(71, 150, 77);
    padding: 2%;
    border-radius: 8px;
    font-weight: bold;
    box-shadow: 1px 6px 1px 1px rgba(84, 84, 84, 0.8);
    margin-top: 3%;
    width: auto;
    height: auto;
    margin-left: auto;
    cursor: pointer;
    &:hover{
        color: black;
        background: rgb(71, 150, 77);
    };
    &:active{
        background: rgb(55,115,59)
    }`
