import React from 'react'
import styled from 'styled-components'

export const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #DFE4DE;
    padding: 50px;
`
export const H3 = styled.h3`
    color:#373737;
    margin-top: 30px;
`
export const P = styled.p`
    color:#373737;
    margin-bottom: 50px;
`
export const Input = styled.input`
    padding: 10px;
    width: 300px;
    border:none;
    
`
export const Button = styled.button`
    background-color: #DFE4DE;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #373737;
    color: #373737;
    margin-top: 20px;
    text-align: left;
    padding: 10px;
    width: 130px;
    font-size: normal normal 600 40px/32px Hurme Geometric Sans 1;
    cursor: pointer;
`

export default function Form(){
return(
    <Div>  
        <H3>SUBSCRIBE</H3>
        <P>Sing up for newsletter</P>
        <form>
            <Input placeholder='Your Email'/>
        </form>
        <Button>SUBMIT</Button>
    </Div>
)

}