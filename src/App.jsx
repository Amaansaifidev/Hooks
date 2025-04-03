import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [name, setname] = useState("amaan"); 
  return (
  <>
  <p>{name}</p>      
</>

  )
}

export default App
