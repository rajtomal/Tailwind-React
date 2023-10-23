import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from 'flowbite-react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-[44px] font-bold underline">
        Hello world!
      </h1>
      <Button>Click me</Button>
    </>
  )
}

export default App
