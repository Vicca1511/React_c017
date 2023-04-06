import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import { Login } from './components/pages/Login'

export function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Login/>
    </div>
  )
}


