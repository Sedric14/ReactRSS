import React from 'react';
import Board from 'components/board';
import Search from 'components/search';

const Home = () => {
  sessionStorage.setItem('page', 'Home');
  return (
    <>
      <header>
        <h2 className="headerText">{sessionStorage.getItem('page')}</h2>
      </header>
      <h1 className="title">Home page</h1>
      <Search />
      <Board />
    </>
  );
};

export default Home;
