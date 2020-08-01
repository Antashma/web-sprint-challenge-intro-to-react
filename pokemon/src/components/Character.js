import React from 'react'
// Write your Character component here

const Character = props => {
    const {pkmData} = props
    return (
        <section className='CharacterBox'>
            <h2>{pkmData.name}</h2>
            <p>national dex no. {pkmData.id}</p>
            <div>
                <p>height: {pkmData.height} cm / weight: {pkmData.weight * .1} kg</p>
                <p>base exp: {pkmData.base_experience}</p>
            </div>
        </section>
        )
}

export default Character