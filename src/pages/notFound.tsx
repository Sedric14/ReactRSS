import React from 'react';

const NotFound = () => {
  sessionStorage.setItem('page', '404');
  return (
    <>
      <header>
        <h2 className="headerText">{sessionStorage.getItem('page')}</h2>
      </header>
      <h1 className="title">Not Found</h1>
    </>
  );
};

export default NotFound;
