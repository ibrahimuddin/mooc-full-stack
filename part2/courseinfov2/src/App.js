import Course from './components/Course'
import {useState} from 'react'

const App = () => {
  const [notes,setNotes] = useState([])
  const [newNote, setNewNote] = useState(
    'enter a text'
  )
    const course = {
      id: 1,
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name:'test',
          exercises: 5,
          id: 4
        },
      ]
    }

    const course2 = {
      id: 2,
      name: 'Half Stack application development v2',
      parts: [
        {
          name: 'Fundamentals of React v2',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data v2',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component v2',
          exercises: 13,
          id: 3
        },
        {
          name:'test v2',
          exercises: 5,
          id: 4
        },
      ]
    }
    function getTotalExercises(parts) {
      return parts.reduce((total, part) => {
        return total + part.exercises;
      }, 0);
    }

    const addNote = (event) => {
      event.preventDefault()
      const noteObject = {
        content: newNote,
        important: Math.random() < 0.5,
        id: notes.length + 1,
      }
      setNotes(notes.concat(noteObject))
      setNewNote('')
    }

    const handleNoteChange = (event) => {
      console.log(event.target.value)
      setNewNote(event.target.value)
    }
      
    
    // const totalExercises = course.parts.reduce((total,part)=> {
    //   return total+part.exercises
    // },0)
  
    return <div>
        <Course course={course} total={getTotalExercises(course.parts)}/>
        <Course course={course2} total={getTotalExercises(course2.parts)}/>
        <form onSubmit={addNote}>
          <input value={newNote} onChange={handleNoteChange}/>
          <button type="submit">save</button>
        </form>
      </div>
  }
  
  export default App