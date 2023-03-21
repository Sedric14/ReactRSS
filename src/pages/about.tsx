import React from 'react';

const About = () => {
  sessionStorage.setItem('page', 'About');
  const headerText = document.querySelector('.headerText');
  if (headerText) headerText.innerHTML = `${sessionStorage.getItem('page')}`;
  return <h1 className="title">About page</h1>;
};

export default About;
