import React from "react";
import styled from "styled-components";

export const Containerr = styled.h3`
    text-align: center;
    text-transform: uppercase;
    font-size: 24px;
    padding: 10px;
    margin-top:40px;
    letter-spacing: 3px;
    color: #373737;
    font-family: 'Montserrat', sans-serif;
    ::after {
        content: "";
        display: block;
        background: #373737;
        width: 80px;
        height: 6px;
        margin: 12px auto;
    }
`;

export default function Title({ title }) {
    return(
        <Containerr>
            {title}
        </Containerr>
    )
}