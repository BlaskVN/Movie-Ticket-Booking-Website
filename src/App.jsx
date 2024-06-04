import React from 'react';
import { BrowserRouter , Routes , Route, Navigate } from 'react-router-dom'
import Navbar from './pages/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import List from './pages/List.jsx';
import SignIn from './pages/SignIn.jsx';
import NotFound from './pages/NotFound.jsx';
import booking from './pages/booking.jsx';
import './App.css';
function App() {  
  return (
      <>
        <Navbar />
        <br></br><br></br>
        {/* {component} */}
        <div className="container">
        <BrowserRouter> 
          <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/list" element={<List/>} />
            <Route path="/signin" element={<SignIn/>} />
            <Route path="*" element={<NotFound/>} />
            <Route path="/booking" element={<booking/>} />
          </Routes>
        </BrowserRouter>
        </div>
      </>
      
  );
}
export default App;