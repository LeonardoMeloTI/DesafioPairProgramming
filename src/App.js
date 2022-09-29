import React from'react'
import Container3 from './Components/Container3'
import Form from './Components/Form'
import Footer from './Components/Footer'
<<<<<<< HEAD
import SubFooter from './Components/SubFooter'
import styled from 'styled-components'

export const Div = styled.div`
  
  width: 100%;
`

export default function App(){
  return(
    <Div>
=======
import Header from './Components/Header'
import Recipes from './Components/Recipes'
import Nav from './Components/Nav'

import {GlobalStyle} from "./Components/Global/GlobalStyle"

export default function App(){
  return(
    <>
      <GlobalStyle />
      <Nav/>
      <Recipes/>
>>>>>>> 7f5763974545ab92ac1fa4bc43f924326b53ae8c
      <Container3/>
      <Form/>
      <Footer/>
      <SubFooter/>
    </Div>
  )
}