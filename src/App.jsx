import { useState } from 'react'
import './App.css'

function App() {
  const [selectedNumber, setSelectedNumber] = useState(-1)
  const rate = (rating) => {
    setSelectedNumber(Number(rating))
  }
  return (
    <>
      <h1>Star Rating Component</h1>
      <div>{[...Array(5)].map((_, i) => <span className={`star ${selectedNumber >= i && 'star-rated'}`} key={i} onClick={() => rate(i)}>{'\u2605'}</span>)}</div>
      <h2>You have rated {selectedNumber+1} / 5</h2>
      <button onClick={() => setSelectedNumber(-1)}>Reset</button>
    </>
  )
}

export default App
