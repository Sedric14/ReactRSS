import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import About from 'pages/about';
import Home from 'pages/home';
import NotFound from 'pages/notFound';
import FormPage from 'pages/formsPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <>
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
            <Route path="/forms" element={<FormPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
      <footer className="footer">Copyright 2023</footer>
    </>
  );
};

export default App;
