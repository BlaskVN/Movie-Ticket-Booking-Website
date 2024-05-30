import React from 'react';
import Navbar from './Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import List from './pages/List.jsx';
import SignIn from './pages/SignIn.jsx';
function App() {
  let component = <h1>404 Not Found</h1>;
  switch (window.location.pathname) {
    case '/home':
      component = <Home />;
      break;
    case '/about':
      component = <About />;
      break;
    case '/list':
      component = <List />;
      break;
    case '/signin':
      component = <SignIn />;
      break;
  }
  
  return (
      <>
        <Navbar />
        {component}
      </>
  );
}
export default App;