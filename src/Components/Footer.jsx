import React from 'react'
import styled from 'styled-components'


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
`


export default function Footer(){
return(
    <Div>
        <Nav>
            <img src="Facebook" alt="" />
            <Ul>
                <Li>ABAOUT</Li>
                <Li>RECIPES</Li>
                <Li>SUBSCRIBE</Li>
            </Ul>
        </Nav>
    </Div>
)
}