import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import About from '../pages/about';
import Home from '../pages/home';
import NotFound from '../pages/notFound';
import FormPage from '../pages/formsPage';

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
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/forms" component={FormPage} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </main>
      <footer className="footer">Copyright 2023</footer>
    </>
  );
};

export default App;
