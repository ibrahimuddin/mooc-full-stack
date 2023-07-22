import {useState} from 'react'

const Course = ({course, total}) => {
    return (
    <div>
        <h1 key={course.id}>{course.name}</h1>
        {course.parts.map(c1 => <p key={c1.id}>{c1.name} {c1.exercises}</p>)}
        <p>Total : {total}</p>
    </div>
    )
}

const App = () => {
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
      
    
    // const totalExercises = course.parts.reduce((total,part)=> {
    //   return total+part.exercises
    // },0)
  
    return <div>
        <Course course={course} total={getTotalExercises(course.parts)}/>
        <Course course={course2} total={getTotalExercises(course2.parts)}/>
      </div>
  }
  
  export default App