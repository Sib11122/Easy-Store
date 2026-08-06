import Header from './components/Header';
import Footer from './components/footer/Footer.jsx';
import './App.css'
import React from 'react';
import Home from './components/Home.jsx';
function App() {
  return(
    <React.Fragment>
      <Header/>
      <Home/>
      <Footer/>
    </React.Fragment>
  );

}

export default App
