import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useString } from './hooks/useString.js'

function App() {
  const [name, setname] = useString(); 
  return (
  <>
  <p>{name}</p>      
</>

  )
}

export default App
