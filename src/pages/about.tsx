import React from 'react';

const About = () => {
  sessionStorage.setItem('page', 'About');
  return (
    <>
      <header>
        <h2 className="headerText">{sessionStorage.getItem('page')}</h2>
      </header>{' '}
      <h1 className="title">About page</h1>
    </>
  );
};

export default About;
