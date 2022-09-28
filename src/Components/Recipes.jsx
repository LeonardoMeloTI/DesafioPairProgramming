
import Cake from '../img/cake.png';
import Pizza from '../img/pizza.png';
import Juice from '../img/juice.png';
import styled from "styled-components";
import Title from './Title'
import Card from './Cards';

export const Container = styled.div`
    width: 100%;
    height:800px;
    padding: 50px 30px;
    background: #F2F4F1;
`;

export const SectionCards = styled.div`
    margin: 70px 0;
    display: flex;
    justify-content: space-evenly;
    padding:10px;
    @media screen and (max-width: 55rem){
        flex-direction: column;
        align-items: center;
    }
`;

export default function Recipes() {
    return(
        <Container>
            <Title title={`latest recipes`}/>
            <SectionCards>
                <Card img={Cake} title={`Red Velvet Cake`}/>
                <Card img={Pizza} title={`Margherita Pizza`}/>
                <Card img={Juice} title={`Peanut Smoothie`}/>
            </SectionCards>
        </Container>
    )
}