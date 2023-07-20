import { useState } from 'react'

const Statistics = (props) => {
  return ( 
  <div>
      <h1>statistics</h1>
      <p>good : {props.good}</p>
      <p>neutral : {props.neutral}</p>
      <p>bad : {props.bad}</p>
      <p>all : {props.all}</p>
      <p>average : {props.average}</p>
      <p>positive : {props.positive}</p>
  </div>
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
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <Statistics  good={good} bad={bad} neutral={neutral} all={all} average={score/all} positive={(positive/all)*100}/>

    </div>
  )
}

export default App
