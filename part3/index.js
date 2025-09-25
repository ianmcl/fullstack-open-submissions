const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

// --------------------
// 3.8: Morgan logging with POST body
// --------------------
morgan.token('body', (req) => {
  return req.method === 'POST' ? JSON.stringify(req.body) : ''
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

// --------------------
// Hardcoded phonebook
// --------------------
let persons = [
  { id: "1", name: "Arto Hellas", number: "040-123456" },
  { id: "2", name: "Ada Lovelace", number: "39-44-5323523" },
  { id: "3", name: "Dan Abramov", number: "12-43-234345" },
  { id: "4", name: "Mary Poppendieck", number: "39-23-6423122" }
]

// --------------------
// 3.2: Info page
// --------------------
app.get('/info', (req, res) => {
  const count = persons.length
  const date = new Date()
  res.send(`
    <p>Phonebook has info for ${count} people</p>
    <p>${date}</p>
  `)
})

// --------------------
// 3.1: Get all persons
// --------------------
app.get('/api/persons', (req, res) => {
  res.json(persons)
})

// --------------------
// 3.3: Get person by id
// --------------------
app.get('/api/persons/:id', (req, res) => {
  const id = req.params.id
  const person = persons.find(p => p.id === id)
  if (person) {
    res.json(person)
  } else {
    res.status(404).json({ error: 'person not found' })
  }
})

// --------------------
// 3.4: Delete person
// --------------------
app.delete('/api/persons/:id', (req, res) => {
  const id = req.params.id
  persons = persons.filter(p => p.id !== id)
  res.status(204).end()
})

// --------------------
// 3.5 + 3.6: Add new person with validation
// --------------------
app.post('/api/persons', (req, res) => {
  const body = req.body

  // Missing name or number
  if (!body.name || !body.number) {
    return res.status(400).json({ error: 'name or number is missing' })
  }

  // Duplicate name
  if (persons.find(p => p.name === body.name)) {
    return res.status(400).json({ error: 'name must be unique' })
  }

  const newPerson = {
    id: Math.floor(Math.random() * 1000000).toString(),
    name: body.name,
    number: body.number
  }

  persons = persons.concat(newPerson)
  res.json(newPerson)
})

// --------------------
// Start server
// --------------------
const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
