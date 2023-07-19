const Header = (props) =>{
  return(
    <h1>{props.name}</h1>
  )
}

const Part = (props) =>{
  return(
    <p>{props.parts}, {props.exercise}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part parts={props.parts[0].name} exercise={props.parts[0].exercises} />
      <Part parts={props.parts[1].name} exercise={props.parts[1].exercises} />
      <Part parts={props.parts[2].name} exercise={props.parts[2].exercises} />
    </div>
  )
}


const Total = (props) =>{
  return(
    <p>Number of exercises : {props.total}</p>
  )
}

const App = () => {
  const course = {
    name : 'Half Stack application development',
    parts : [
      {
      name : 'fundamentals of React',
      exercises : 10
      },
      {
      name : 'Using props to pass data',
      exercises : 7
      },
      {
      name : 'State of a component',
      exercises : 14
      }
    ]
  } 


  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}/>
    </div>
  )
}

export default App