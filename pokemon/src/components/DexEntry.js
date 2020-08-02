import axios from 'axios'
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const DexBox = styled.p`
    padding: 10px 0;
    max-width: 500px;
    text-align: left;
    border-top: 1px dashed silver;
    border-bottom: 1px dashed silver;
`

const UppercaseText = styled.span`
    text-transform:uppercase;
`

const DexEntry = props => {
    const {dexURL} = props
    const [dexInfo, setDexInfo] = useState(null)
    const [evolInfo, setEvolInfo] = useState(null)
    useEffect(() => {
        axios.get(dexURL)
        .then(response => {
            console.log('got dex info', response)
            setDexInfo(response.data.flavor_text_entries[4].flavor_text)
            setEvolInfo(response.data.evolves_from_species.name)
        })
        .catch(error => console.log('failed to get info', error))
    }
    , [dexURL])
    return (
        <div>
            <DexBox>
            {!evolInfo ? `${dexInfo} Has no pre-evolutionary form.` : `${dexInfo} Evolves from ${evolInfo}.`} 
            </DexBox>
        </div>
    )
}

export default DexEntry