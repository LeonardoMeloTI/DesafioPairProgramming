import React from 'react';
import styled from 'styled-components'

export const List = styled.ul`
    display: flex;
    justify-content: flex-end; 
    list-style: none;
    a{
        padding: 40px;
        font-size: 20px;
        margin-left:20px;
        font-family:'Montserrat', sans-serif;
        font-weight: 400px;
        letter-spacing: 3px;
        color:#373737;
        text-transform: uppercase;
        text-decoration: none;
    }
    li{ 
        margin-left:2px;
        border:solid;
        padding:1px;
        position:relative;top:0}
        li:hover{top:-4px;box-shadow:0 20px 4px #999;
        transition: all .2s ease-in-out
    }
    
    @media screen and (max-width:50rem){
        display: none;
    }
`;


export default function Header(){
    return (
            <List>
                <li><a href="#" >About</a></li> 
                <li><a href="#" >Recipes</a></li> 
                <li><a href="#" >Subscribe</a></li> 
            </List>
    );
}