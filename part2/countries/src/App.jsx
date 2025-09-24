import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <div>
        find countries: <input value={filter} onChange={handleFilterChange} />
      </div>

      <div>
        {filteredCountries.length > 10 && (
          <p>Too many matches, specify another filter</p>
        )}

        {filteredCountries.length <= 10 && filteredCountries.length > 1 && (
          <ul>
            {filteredCountries.map(country => (
              <li key={country.cca3}>{country.name.common}</li>
            ))}
          </ul>
        )}

        {filteredCountries.length === 1 && (
          <CountryDetail country={filteredCountries[0]} />
        )}
      </div>
    </div>
  )
}

const CountryDetail = ({ country }) => {
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>capital {country.capital ? country.capital[0] : 'N/A'}</p>
      <p>area {country.area}</p>

      <h3>languages:</h3>
      <ul>
        {country.languages &&
          Object.values(country.languages).map(lang => (
            <li key={lang}>{lang}</li>
          ))}
      </ul>

      <img
        src={country.flags.png}
        alt={`Flag of ${country.name.common}`}
        width="150"
      />
    </div>
  )
}

export default App
