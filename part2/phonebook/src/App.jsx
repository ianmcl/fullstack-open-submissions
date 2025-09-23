import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const addName = (event) => {
    event.preventDefault()

    if (newName.trim() === '') {
      return
    }

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const nameObject = {
      id: String(persons.length + 1),
      name: newName,
      number: newNumber
    }
    
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
  }
  
  const handleAddName = (event) => {
    setNewName(event.target.value)
  }

  const handleAddNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={filter} onChange={handleFilterChange} />
      </div>
      <h3>Add a new</h3>
      <form onSubmit={addName}>
        <div>
          <div>name: <input value={newName} onChange={handleAddName} /></div>
          <div>number: <input value={newNumber} onChange={handleAddNumber} /></div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <div>debug: {newName} {newNumber}</div>
      <h3>Numbers</h3>
      <div>
        {personsToShow.map(person =>
          <p key={person.id}>{person.name} {person.number}</p>
        )}
      </div>
    </div>
  )
}

export default App
