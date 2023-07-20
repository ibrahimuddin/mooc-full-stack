import { useState } from 'react'

const StatisticsLine = (props) =>{
  return(
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => { 
    if(props.all >0) {
      return (
        <table>
          <tbody>
      <StatisticsLine text='good' value={props.good}/>
      <StatisticsLine text='neutral' value={props.neutral}/>
      <StatisticsLine text='bad' value={props.bad}/>
      <StatisticsLine text='all' value={props.all}/>
      <StatisticsLine text='average' value={props.average}/>
      <StatisticsLine text='positive' value={props.positive}/>
      </tbody>
      </table>
      )
    }
}

const Button = (props) => {
  const {handleClick, text} = props
  return (
   <button onClick={handleClick}>{text}</button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [score, setScore] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good+1
    setGood(updatedGood)
    setAll(all+1)
    setScore(score +1)
    setPositive(positive+1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral+1)
    setAll(all+1)
  }
  const handleBadClick = () => {
    setBad(bad+1)
    setAll(all+1)
    setScore(score-1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick ={handleGoodClick} text='good'/>
      <Button handleClick ={handleNeutralClick} text='neutral'/>
      <Button handleClick ={handleBadClick} text='bad'/>
      <h1>statistics</h1>
      <Statistics  good={good} bad={bad} neutral={neutral} all={all} average={score/all} positive={(positive/all)*100}/>
    </div>
  )
}

export default App
