const Header = (props) =>{
  return(
    <h1>{props.name}</h1>
  )
}

const Content = (props) =>{
  return(
    <p>{props.parts}, {props.exersise}</p>
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
      <Content parts={part1} exersise={exercises1}/>
      <Content parts={part2} exersise={exercises2}/>
      <Content parts={part3} exersise={exercises3}/>
      <Total total={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App