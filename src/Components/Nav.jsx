import React from 'react';
import Logo from "../img/logo.png"
import Background from "../img/background.png";
import Header from './Header';
import styled from 'styled-components'

export const Container = styled.section`
    background-color: #FFFFFF;
    width: 100%;
    padding: 25px;
    @media screen and (max-width:50em){ 
    }
`;

export const Wrapper = styled.div`
    background-image: url(${Background});
    width: 100%;
    height: 50vw;
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: 73%;
    display: flex;
    flex-direction: column;
    h2{ 
        text-transform: uppercase;
        text-align: center;
        color: #373737;
        margin-block: auto;
        font-family: 'Montserrat', sans-serif;
        font-size: 5rem;
        font-weight: 560;
        padding-bottom: 12rem;
        letter-spacing: 5px;
        line-height: .75;
    }
    @media screen and (max-width:50em){
        height: 80vh;
        img{
            display: none;
        }
        h2{
            margin: 160px auto;
            padding: 0;
        }
    }
`;  
const NavWrapper = styled.div`
    width: 100%;
    padding: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    @media screen and (max-width:50rem){
        justify-content: flex-end;
    }
`;

export default function Nav() {
    return (
        <>
        <header>
            <Container>
                <Wrapper>
                    <NavWrapper>
                        <img src={Logo} alt="Logo" title="Logo" />
                        <Header/>
                    </NavWrapper>
                     <h2>Recipes</h2>
                </Wrapper>
            </Container>
        </header>
        </>
    );
}