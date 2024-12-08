import './App.css'
import ClubPage from './components/Club/ClubPage';
import EatAndDrinkPage from './components/Eat & Drink/EatAndDrinkPage';

import Footer from './components/Footer'
import HomePage from './components/Home'
import Nevbar from './components/Nevbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
    <Router>
    <Nevbar/>
      <Routes>
        <Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/eatanddrink" element={<EatAndDrinkPage/>}></Route>
          <Route path="/club" element={<ClubPage/>}></Route>
        </Route>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
