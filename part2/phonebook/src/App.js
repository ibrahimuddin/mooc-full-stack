import { useState } from 'react'
import Filter from './Filter'

const Form = (props) => {
  return(
      <div>
      <form onSubmit={props.addEvent}>
      <div>
        name: <input value={props.newName} onChange={props.handleNameChange}/>
        phonenumber: <input value={props.newNumber} onChange={props.handleNumberChange}/>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
      </form>
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
  const [newNumber,setNewNumber] = useState('')
  const [showedPersons,setShowedPersons] = useState(persons)
  const [searchName, setSearchName] = useState("")

  const addEvent = (event) => {
    event.preventDefault()
    const newObject = {
      name : newName,
      number : newNumber
    }
    console.log(persons)
      if(!(persons.some(name => areTheseObjectsEqual(newObject, name)))){
        setPersons(persons.concat(newObject))
      }else{
        alert(`${newName} is Already in phonebook!`);
      }
    setNewName('')
    setNewNumber('')
  }

  const searchEvent = (event) => {
    event.preventDefault()
    const searchedObject = persons.filter((person) => person.name.toLowerCase().includes(searchName.toLowerCase()));
    setShowedPersons(searchedObject)
    setSearchName("")
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  function areTheseObjectsEqual(first,second){
    return first.name===second.name;
  }

  const handleFilterChange = (event) => {
    setSearchName(event.target.value)
  }


  

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter  searchEvent={searchEvent} searchName={searchName} handleFilterChange={handleFilterChange}/>
      <br/>
      <Form addEvent={addEvent} handleNameChange={handleNameChange} newName={newName} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <ul>
        {showedPersons.map((persons,index)=> (
          <li key={index}>{persons.name} : {persons.number}</li>
        ))}
      </ul>
      <div>debug: {newName}</div>
    </div>
  )
}

export default App
