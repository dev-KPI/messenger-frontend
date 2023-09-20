import { useState, useEffect } from 'react'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('Useffect')
  }, [count])

  const increment = () => {
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <div className="h-screen flex items-center justify-center bg-purple-300">
      <Button incrementCounter={increment} counter={count} />
    </div>
  )
}

export default App
