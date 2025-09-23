import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { id: '1', name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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

  return (
    <div>
      <h2>Phonebook</h2>
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
      <h2>Numbers</h2>
      <div>
        {persons.map(person => <p key={person.id}>{person.name} {person.number}</p>)}
      </div>
    </div>
  )
}

export default App
