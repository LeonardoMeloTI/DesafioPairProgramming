import React from'react'
import Container3 from './Components/Container3'
import Form from './Components/Form'
import Footer from './Components/Footer'
import SubFooter from './Components/SubFooter'
import styled from 'styled-components'
import {GlobalStyle} from './Components/Global/GlobalStyle'
import Recipes from './Components/Recipes'
import Nav from './Components/Nav'

export const Div = styled.div`
  width: 100%;
`
export default function App(){
  return(
    <Div>
      <GlobalStyle/>
      <Nav/>
      <Recipes/>
      <Container3/>
      <Form/>
      <Footer/>
      <SubFooter/>
    </Div>
  )
}