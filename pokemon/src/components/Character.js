import React from 'react'
import styled from 'styled-components'
import DexEntry from './DexEntry'
// Write your Character component here

//STYLES with STYLED COMPONENTS
const NameHeadline = styled.h2`
    margin:0;  
    padding: 10px 0;  
    font-family:monospace;
    font-style:italic;
    font-size: 25px;
    color:white;
    background: black;
    text-transform: uppercase;
`

const MainContainer = styled.div`
    font-family: monospace;
    font-size:16px;
    margin:0;
    background: floralwhite;
`

const ImgContainer = styled.div`
    padding: 10px 0;
    display: flex;
    justify-content: center;

`
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;

`
const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const TypeBox = styled.p`
    text-transform: uppercase;
`

const HWBox = styled.p`
    text-transform: uppercase;
`

const VerBox = styled.p`
    text-transform: Capitalize;

`

//CHARACTER COMPONENT
const Character = props => {
    const {data} = props
    console.log('data', data)
    return (
        <section className='CharacterBox'>
            <NameHeadline>{data.name} -- no. {data.id}</NameHeadline>
            <MainContainer>
                <ImgContainer>
                    <img alt={data.name} src={data.sprites.other.dream_world.front_default}/>
                    <RightSide>
                        <img alt={`normal in-game ${data.name}`} src={data.sprites.front_default}/>
                        <img alt={`shiny in-game ${data.name}`} src={data.sprites.front_shiny}/>
                    </RightSide>             
                </ImgContainer>
                <InfoContainer>
                    <TypeBox>{data.types[0].type.name} {!data.types[1] ? '' : ` / ${data.types[1].type.name}`}</TypeBox>
                    <HWBox>Height: {data.height} dm / Weight: {data.weight} hg</HWBox>
                    <DexEntry dexURL = {data.species.url}/>
                    <VerBox>Version Debut: {data.game_indices[0].version.name} / {data.game_indices[1].version.name} </VerBox>
                </InfoContainer>
            </MainContainer>
        </section>
        )
}

export default Character