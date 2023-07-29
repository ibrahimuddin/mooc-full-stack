import { useEffect, useState } from 'react';
import Filter from './Filter';
import axios from 'axios';

const Form = (props) => {
  return (
    <div>
      <form onSubmit={props.addEvent}>
        <div>
          name: <input value={props.newName} onChange={props.handleNameChange} />
          phonenumber: <input value={props.newNumber} onChange={props.handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [showedPersons, setShowedPersons] = useState([]);
  const [searchName, setSearchName] = useState('');

  const hook = () => {
    console.log('effect');
    axios
      .get('http://localhost:3002/persons')
      .then(response => {
        console.log(response);
        setPersons(response.data);
        setShowedPersons(response.data); // Update the showedPersons state here as well
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        // Handle the error here, e.g., display an error message or retry the request
      });
  };

  useEffect(hook, []);

  const addEvent = (event) => {
    event.preventDefault();
    const newObject = {
      name: newName,
      number: newNumber,
    };
    console.log(persons);
    if (!persons.some(name => areTheseObjectsEqual(newObject, name))) {
      setPersons(persons.concat(newObject));
      setShowedPersons(showedPersons.concat(newObject)); // Also update the showedPersons state here
    } else {
      alert(`${newName} is Already in phonebook!`);
    }
    setNewName('');
    setNewNumber('');
  };

  const searchEvent = (event) => {
    event.preventDefault();
    const searchedObject = persons.filter((person) =>
      person.name.toLowerCase().includes(searchName.toLowerCase())
    );
    setShowedPersons(searchedObject);
    setSearchName('');
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  function areTheseObjectsEqual(first, second) {
    return first.name === second.name;
  }

  const handleFilterChange = (event) => {
    setSearchName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchEvent={searchEvent} searchName={searchName} handleFilterChange={handleFilterChange} />
      <br />
      <Form
        addEvent={addEvent}
        handleNameChange={handleNameChange}
        newName={newName}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <ul>
        {showedPersons.map((person, index) => (
          <li key={index}>
            {person.name} : {person.number}
          </li>
        ))}
      </ul>
      <div>debug: {newName}</div>
    </div>
  );
};

export default App;