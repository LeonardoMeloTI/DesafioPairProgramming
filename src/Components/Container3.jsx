import React from 'react'
import styled from 'styled-components'


export const Container = styled.div`
    
    display: flex;
    justify-content: end;
`
export const Div = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 30px;
    width: 50%;
    height: 400px;
    background-color: #FFFFFF;
    
`
export const H2 = styled.h2`
    color: #373737;

`
export const P = styled.p`
    color: #373737;
    padding: 80px;
    
`

export default function Container3(){
return(
    <Container>
        <Div>
            <H2>ABOUT</H2>
            <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur lorem, quis tempor lorem justo quis nisi. Nam interdum, nisi nec mollis sagittis, enim risus euismod nisi, quis rutrum quam augue id mauris. Pellentesque mattis hendrerit semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vestibulum nisl ante, et ultricies sapien facilisis aliquam.</P>   
        </Div>
    </Container>
)

}