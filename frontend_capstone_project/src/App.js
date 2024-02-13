import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';
import Nav from './Components/Nav';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default App;
