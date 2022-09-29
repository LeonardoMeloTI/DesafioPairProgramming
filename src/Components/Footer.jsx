import React from 'react'
import styled from 'styled-components'
import Instagram from '../img/Instagram.png'
import Twitter from '../img/Twitter.png'
import Facebook from '../img/Facebook.png'
import Pinterest from '../img/Pinterest.png'

export const Div = styled.div`
    
    background-color: #F2F4F1;
    display: flex;
    width: 100%;
    height: 250px;
    

`
export const Nav = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    

`
export const Ul = styled.ul`
    display: flex;
    padding: 80px;
`
export const Li = styled.li`
    color: #373737;
    padding: 30px;
    list-style: none;
    cursor: pointer;
    transition: 1s all;
    

`
export const Figure = styled.figure`
display: flex;
align-items: center;
width: 50%;
`
export const Img = styled.img`
    width: 40px;
    height: 40px;
    margin: 10px;
    
`

export default function Footer(){
return(

    <Div>
        <Nav>
        <Figure>
                <Img src={Instagram} alt="Instagram" />
                <Img src={Twitter} alt="Twitter" />
                <Img src={Facebook} alt="Facebook" />
                <Img src={Pinterest} alt="Pinterest" />
        </Figure>
            <Ul>
                <Li>ABAOUT</Li>
                <Li>RECIPES</Li>
                <Li>SUBSCRIBE</Li>
            </Ul>
        </Nav>
    </Div>

    

)
}