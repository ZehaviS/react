import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Heeder } from './components/Header.jsx';
import { Books } from './components/Books.jsx';
import { Rools } from './components/Rools.jsx'
import './App.css'

function App() {

  return (
    <div>
      <Heeder />
      <div id="center " >
        <div>
          <Books />
        </div>
        <div id='Rools'>
          <Rools />
        </div>
      </div>
    </div>
  )
}

export default App
