import React, {useState} from 'react';
import './style.scss';
import Header from '../Header';
import Footer from '../Footer';
import Home from '../pages/Home';




function App() {

  return (
    <div className="App">
      <h1>Hello</h1>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
