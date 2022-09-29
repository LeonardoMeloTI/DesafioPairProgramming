import React from'react'
import styled from 'styled-components'

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 35px;
  background-color: #446061;
  color: #FFFFFF;
` 

export const P = styled.p`
  font-size: 0.7rem;
`

export default function App(){
    return(
      <Div>
        <P>Layout produzido por Vai na Web para fins exclusivamente educacionais. Layout produzido por Vai na Web para fins exclusivamente educacionais. Referência: https://br.pinterest.com/pin/AVuDlMAl4GsQiM6nijH9YbG9bsNKpompSEOEHzig6GJ58AnUtMkSy7k/</P>
      </Div>
    )
  }