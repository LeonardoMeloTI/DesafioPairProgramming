import React from'react'
import Container3 from './Components/Container3'
import Form from './Components/Form'
import Footer from './Components/Footer'
import Recipes from './Components/Recipes'
import Nav from './Components/Nav'

import {GlobalStyle} from "./Components/Global/GlobalStyle"

export default function App(){
  return(
    <>
      <GlobalStyle />
      <Nav/>
      <Recipes/>
      <Container3/>
      <Form/>
      <Footer/>
    </>
  )
}