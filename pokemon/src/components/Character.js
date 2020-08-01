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

const SkyInfoBox = styled.div`
    margin:0;
    background: skyblue;
    font-weight:bold;
`

const Character = props => {
    const {pkmData} = props
    return (
        <section className='CharacterBox'>
            <BlackHeader>{pkmData.name} -- no. {pkmData.id}</BlackHeader>
            <SkyInfoBox>
                <p>height: {pkmData.height} cm / weight: {pkmData.weight * .1} kg</p>
                <p>base exp: {pkmData.base_experience}</p>
            </SkyInfoBox>
        </section>
        )
}

export default Character