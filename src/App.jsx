import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Article from './components/Article'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Article />
    </div>
  )
}

export default App
