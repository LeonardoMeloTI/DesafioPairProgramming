import React from "react";
import styled from "styled-components";

export const Container = styled.div`
    flex:1px;
    max-width: 300px;
    height:400px;
    background-color: #fff;
    box-shadow: 5px 5px 10px #333;
    transition: 0.5s all;
    cursor: pointer;
    :hover {
        transform: scale(.9);
    }
    img {
        width: 100%;
    }
    h2 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        height: 180px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        ::before {
            content: "";
            width: 40px;
            height: 3px;
            background: #373737;
            margin-bottom: 20px;
        }
    }
`;

export default function Card({img, title}) {
    return(
        <Container>
            <img src={img} alt={title}/>
            <h2>{title}</h2>
        </Container>
    )
}