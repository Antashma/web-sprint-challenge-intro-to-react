import axios from 'axios'
import React, {useState, useEffect} from 'react'

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
            <p>
            {!evolInfo ? `${dexInfo} Has no pre-evolutionary form.` : `${dexInfo} Evolves from ${evolInfo}.`} 
            </p>
        </div>
    )
}

export default DexEntry