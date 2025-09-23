import { useState } from 'react'

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div>
      filter shown with <input value={filter} onChange={handleFilterChange} />
    </div>
  )
}

const PersonForm = ({ onSubmit, newName, newNumber, handleAddName, handleAddNumber }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <div>name: <input value={newName} onChange={handleAddName} /></div>
        <div>number: <input value={newNumber} onChange={handleAddNumber} /></div>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const Persons = ({ persons }) => {
  return (
    <div>
      {persons.map(person => 
        <div key={person.id}>{person.name} {person.number}</div>
      )}
    </div>
  )
}

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

    if (newName.trim() === '') return

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
  
  const handleAddName = (event) => setNewName(event.target.value)
  const handleAddNumber = (event) => setNewNumber(event.target.value)
  const handleFilterChange = (event) => setFilter(event.target.value)

  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h3>Add a new</h3>
      <PersonForm 
        onSubmit={addName}
        newName={newName}
        newNumber={newNumber}
        handleAddName={handleAddName}
        handleAddNumber={handleAddNumber}
      />
      <div>debug: {newName} {newNumber}</div>
      <h3>Numbers</h3>
      <Persons persons={personsToShow} />
    </div>
  )
}

export default App
