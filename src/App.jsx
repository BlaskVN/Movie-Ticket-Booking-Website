import React from 'react';
import { BrowserRouter , Routes , Route, Navigate } from 'react-router-dom'
import Navbar from './pages/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import List from './pages/List.jsx';
import SignIn from './pages/SignIn.jsx';
import NotFound from './pages/NotFound.jsx';
function App() {
  // let component = <h1>404 Not Found</h1>;
  // switch (window.location.pathname) {
  //   case '/home':
  //     component = <Home />;
  //     break;
  //   case '/about':
  //     component = <About />;
  //     break;
  //   case '/list':
  //     component = <List />;
  //     break;
  //   case '/signin':
  //     component = <SignIn />;
  //     break;
  //   case '/':
  //     component = <Home />;
  //     break;
  // }
  
  return (
      <>
        <Navbar />
        <br></br><br></br>
        {/* {component} */}
        <BrowserRouter> 
          <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/list" element={<List/>} />
            <Route path="/signin" element={<SignIn/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </BrowserRouter>
      </>
  );
}
export default App;