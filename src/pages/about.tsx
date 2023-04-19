import React from 'react';

const About: React.FC = () => {
  // sessionStorage.setItem('page', 'About');
  console.log('about');
  return (
    <>
      <header>{/* <h2 className="headerText">{sessionStorage.getItem('page')}</h2> */}</header>{' '}
      <h1 className="title">About page</h1>
    </>
  );
};

export default About;
