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

const Content = () =>{
  return(
    <div>
    <Part parts='Fundamentals of React' exercise = '10' />
    <Part parts='Using props to pass data' exercise = '7' />
    <Part parts='State of a component' exercise='14' />
    </div>
  )
}

const Total = (props) =>{
  return(
    <p>Number of exercises : {props.total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total total={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App