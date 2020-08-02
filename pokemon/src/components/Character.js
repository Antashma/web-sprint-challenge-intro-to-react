import React from 'react'
import styled from 'styled-components'
// Write your Character component here

const BlackHeader = styled.h2`
margin:0;    
font-family:serif;
    font-style:italic;
    color:white;
    background: black;
    text-transform: uppercase;
`

const InfoBox = styled.div`
    margin:0;
    background: skyblue;
    font-weight:bold;
`


const Character = props => {
    const {data} = props
    console.log('data', data)
    return (
        <section className='CharacterBox'>
            <BlackHeader>{data.name} -- no. {data.id}</BlackHeader>
            <InfoBox>
                <img alt={data.name} src={data.sprites.other.dream_world.front_default}/>
                <img alt={`normal in-game ${data.name}`} src={data.sprites.front_default}/>
                <img alt={`shiny in-game ${data.name}`} src={data.sprites.front_shiny}/>
                <p>{data.types[0].type.name} {!data.types[1] ? '' : ` / ${data.types[1].type.name}`}</p>
                <p>height: {data.height} dm / weight: {data.weight} hg</p>
                <p>version debut: {data.game_indices[0].version.name} / {data.game_indices[1].version.name} </p>
            </InfoBox>
        </section>
        )
}

export default Character