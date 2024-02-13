import React from 'react';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <header className="">
        <h1>Little Lemon Restaurant</h1>
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Flemon&psig=AOvVaw3Z" width={300} height={300} className="" alt="logo" />
      </header>
      <nav className='' >
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <main>
        <h1>Capstone Project</h1>
      </main>
      <footer>
        <p>Little Lemon Restaurant&copy; 2024</p>
      </footer>
    </React.Fragment>
  );
}

export default App;
