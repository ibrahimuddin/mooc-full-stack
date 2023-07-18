const Hello =(props) =>{
  return(
    <div>
      <p>hello {props.name}, your age is {props.age} wow you are young! My name is Ibrahim!</p>
    </div>
  )
}


const App = () => {
  const now = new Date()
  console.log(now)
  return (
    <div>
      <Hello name="isa" age={12} />
      <Hello name="bob"age={5}/>
    </div>
  )
}

export default App
