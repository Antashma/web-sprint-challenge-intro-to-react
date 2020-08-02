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
    const {data} = props
    console.log('data', data)
    return (
        <section className='CharacterBox'>
            <BlackHeader>{data.name} -- no. {data.id}</BlackHeader>
            <SkyInfoBox>
                <p>height:  dm / weight:  hg</p>
                <p>base exp: </p>
            </SkyInfoBox>
        </section>
        )
}

export default Character