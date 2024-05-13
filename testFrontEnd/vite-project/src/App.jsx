import { Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react'
import Home from "./components/views/Home";
import './App.css'

function App() {
  const [products, setProducts] = useState([])

  // useEffect(() => {}, []);


  return (
    <div className="App">
      <Routes>
        <Route path="/home/*" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
