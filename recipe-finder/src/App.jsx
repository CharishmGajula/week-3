// App.jsx with dark-themed styled navbar
import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Items from './Components/Items';
import Item from './Components/Item/item';

function App() {
  const [query,setQuery]=useState("");
  const [text,setText]=useState("")
  function handleSearch()
  {
    setText(query)
  }
  return (
    <>
      <Router>
        <nav className="flex justify-between items-center bg-gray-950 px-8 py-4 shadow-md sticky top-0 z-50">
          <div className="flex items-center space-x-4">
            <img src={viteLogo} alt="Logo" className="h-8 w-8" />
            <Link to='/' className="text-2xl font-bold text-white hover:text-yellow-400 transition-colors">
              Recipe Finder
            </Link>
          </div>
          <ul className="flex space-x-6 text-white text-lg">
            <li>
              <Link to="/veg" className="hover:text-yellow-400 transition-colors">VEG</Link>
            </li>
            <li>
              <Link to="/nonVeg" className="hover:text-yellow-400 transition-colors">NON-VEG</Link>
            </li>
            <li className='gap-1'>
              <input type="text" className='bg-amber-50 rounded-2xl m-0.5 text-black p-1' placeholder=" ex:Chicken" onChange={(e)=>setQuery(e.target.value)}/>
              <Link to="/search"><button className="bg-yellow-400 p-2 rounded-xl" onClick={handleSearch}>Search</button></Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Items search="true" item={text}/>} />
          <Route path='/veg' element={<Items category="vegetarian" search="false"/>} />
          <Route path='/nonVeg' element={<Items category="chicken" search="false"/>} />
          <Route path="/item/:id" element={<Item />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
