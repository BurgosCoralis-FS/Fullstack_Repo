import React from "react";
import styled from 'styled-components';

const MyInput = props => {
    return(
        <input
            id={props.id}
            type={props.inputType}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
            style={props.style}
            />
    )
}

export default MyInput;