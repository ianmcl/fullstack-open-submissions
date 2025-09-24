import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
    setSelectedCountry(null) // reset when typing new filter
  }

  const handleShowCountry = (country) => {
    setSelectedCountry(country)
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
        {selectedCountry ? (
          <CountryDetail country={selectedCountry} />
        ) : filteredCountries.length > 10 ? (
          <p>Too many matches, specify another filter</p>
        ) : filteredCountries.length > 1 ? (
          <ul>
            {filteredCountries.map(country => (
              <li key={country.cca3}>
                {country.name.common}{' '}
                <button onClick={() => handleShowCountry(country)}>show</button>
              </li>
            ))}
          </ul>
        ) : filteredCountries.length === 1 ? (
          <CountryDetail country={filteredCountries[0]} />
        ) : (
          <p>No matches</p>
        )}
      </div>
    </div>
  )
}

const CountryDetail = ({ country }) => {
  const api_key = import.meta.env.VITE_OPENWEATHER_KEY
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    if (country.capital && country.capital.length > 0) {
      const capital = country.capital[0]
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}&units=metric`
        )
        .then(response => {
          setWeather(response.data)
        })
    }
  }, [country, api_key])

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

      {weather && (
        <div>
          <h3>Weather in {country.capital[0]}</h3>
          <p>temperature {weather.main.temp} °C</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />
          <p>wind {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  )
}

export default App
