import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/header'
import data from './data'
import Card from './components/card'

function App() {

        let cards = data.map((item) => Card(item));
  return (
    <div className="App">
        <Header />
        {cards}
    </div>
  )
}

export default App
