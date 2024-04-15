import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

//useState take array [first vale when we give and seconde what i want like increament]
  // Add button
  let [counter, setCounter] = useState(0)
  const addValue = () => {
    if (counter < 5) {
      setCounter(counter + 1);
    }
  }


  // Remove button
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }

  }

  return (
    <>

      <h1>Sonu kush ||</h1>
      <h2>Counter Value : {counter}</h2>
      <button
        onClick={addValue}
      >Add value</button>
      <button
        onClick={removeValue}
      >remove value</button>
    </>
  )
}

export default App
