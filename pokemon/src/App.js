import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Character from './components/Character'
import './App.css';



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [pkmData, setPkmData] = useState([])
  const [pokemon, setPokemon] = useState('gengar')

  const dreamTeam = [
    'gengar', 
    'gyarados',
    'luxray',
    'cryogonal', 
    'steelix',
    'blissey'
  ]
  
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(success => {
        console.log('got data', success)
        console.log(success.data)
        setPkmData(success.data)
      })
      .catch(error => {
        console.log('no data found...', error)
      })
    }, [])

  return (
    <div className="App">
      <h1 className="Header">The Dream Team</h1>
      <Character key = {pkmData.name} pkmData = {pkmData} />
    </div>
  );
}

export default App;
