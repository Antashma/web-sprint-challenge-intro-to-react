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

  /* using these mons:
    'gengar', 
    'gyarados',
    'luxray'
    'cryogonal', 
    'steelix',
    'blissey'
  */
  
  useEffect(() => {
    axios.all([
      axios.get(`https://pokeapi.co/api/v2/pokemon/gengar`),
      axios.get(`https://pokeapi.co/api/v2/pokemon/gyarados`),
      axios.get(`https://pokeapi.co/api/v2/pokemon/luxray`),
      axios.get(`https://pokeapi.co/api/v2/pokemon/cryogonal`),
      axios.get(`https://pokeapi.co/api/v2/pokemon/steelix`),
      axios.get(`https://pokeapi.co/api/v2/pokemon/blissey`)])
      .then(success => {
        console.log('got data', ...success)
        setPkmData(success)
      })
      .catch(error => {
        console.log('no data found...', error)
      })
    }, [])
    
  return (
    <div className="App">
      <h1 className="Header">My Pokemon Team</h1>
      { //mapping data
      Object.values(pkmData).map((item, index) => {
        return <Character key = {index} data = {item.data} />
      })
        }
    </div>
  )};

export default App;
