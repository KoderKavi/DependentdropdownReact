import React, { useState } from 'react'
import './App.css'

const App = () => {

  const countries = [
    {
      name: 'USA',
      states: [{
        name:'Alaska',
        cities: ["Anchorage", "Fairbanks", "Lakes", "Palmer"]
      },
      {
        name:'California',
        cities: ["Adelanto", "Artesia", "Benicia", "Dublin"]
      },
      {
        name:'New York',
        cities: ["Queens", "Brooklyn", "Manhattan", "Bronx"]
      }]
    },
    {
      name: 'India',
      states: [{
        name:'Delhi',
        cities: ["New Delhi", "Yamuna Paar"]
      },
      {
        name:'Bombay',
        cities: ["Juhu", "Powai", "Borivali West"]
      },
      {
        name:'Calcutta',
        cities: ["Chandan Nagar", "Golpark","Rajarhat"]
      }]
    }
  ]


  const [country, setCountry] = useState()
  const [state, setState] = useState()
  const [city, setCity] = useState()
  const [states, setStates] = useState([])
  const [cities, setCities] = useState([])


const countryChange = (e) => {
  setState('')
  setCity('')
  setCountry(e.target.value)
  setStates(countries.find(country=>country.name===e.target.value).states)
}

const stateChange = (e) => {
  setState(e.target.value)
  setCities(states.find(state=>state.name===e.target.value).cities)
}

const cityChange = (e) => {
  setCity(e.target.value)
}

  return (
      <div className="container">
        <h2>Select Country, State and City</h2>
        <div className="selectBox">
            <select name="country" id="country" value={country} onChange={countryChange}>
              <option value="country">--Country--</option>
              {countries.map(country=>(
                <option value={country.name}>{country.name}</option>
              ))}
            </select>
            <select name="state" id="state" value={state} onChange={stateChange}>
              <option value="state">--State--</option>
              {states.map(state=>(
                <option value={state.name}>{state.name}</option>
              ))}
            </select>
            <select name="city" id="city"  value={city} onChange={cityChange}>
              <option value="city">--City--</option>
              {cities.map(city=>(
                <option value={city}>{city}</option>
              ))}
            </select>
          </div>
       </div>


 
  )
}

export default App