import React, { Component } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import About from 'pages/about';
import Home from 'pages/home';
import NotFound from 'pages/notFound';
import Listeners from './Listeners';
import Forms from 'pages/forms';

class App extends Component {
  componentDidMount() {
    window.addEventListener('load', Listeners.run);
    const input = document.querySelector('.searchInput') as HTMLInputElement;
    if (localStorage.getItem('search') && input)
      input.value = localStorage.getItem('search') as string;
  }
  render(): React.ReactNode {
    return (
      <>
        <header>
          <h2 className="headerText">{sessionStorage.getItem('page')}</h2>
        </header>
        <main>
          <aside className="aside">
            <div className="linkHome link">
              <Link to="/">Home</Link>
            </div>
            <div className="linkAbout link">
              <Link to="/about">About</Link>
            </div>
            <div className="linkForms link">
              <Link to="/forms">Forms</Link>
            </div>
          </aside>
          <div className="base">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/forms" element={<Forms />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>
        <footer className="footer">Copyright 2023</footer>
      </>
    );
  }
}

export default App;
