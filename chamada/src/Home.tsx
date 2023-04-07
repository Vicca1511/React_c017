import { useState } from 'react'


import { Login } from './components/pages/Login/Login'

export function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Login/>
    </div>
  )
}


