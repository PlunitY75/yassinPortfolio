import {  } from 'react'

import './App.css';
import Section1 from './pages/section1';
import Section2 from './pages/Section2';
import Navbar from './components/navbar';

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <Section1/>
        <Section2/>
      </div>
    </>
  )
}

export default App
