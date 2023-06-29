import { useState } from 'react'
import './App.css'
import Home  from './page/home'
import Login from './page/login'
import Spotify from './page/spotifyy'
import {Routes, Route} from "react-router-dom"



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path="/" excat element={<Spotify/>}></Route>
      <Route path="/login" excat element={<Login/>}></Route>
     </Routes>
    </>
  )
}

export default App
