import React, { useState } from 'react';
import Board from 'components/board';
import Search from 'components/search';

const Home = () => {
  const [newSearch, setNewSearch] = useState('');
  sessionStorage.setItem('page', 'Home');
  const searchHandler = (str: string) => {
    setNewSearch(str);
  };
  return (
    <>
      <header>
        <h2 className="headerText">{sessionStorage.getItem('page')}</h2>
      </header>
      <h1 className="title">Home page</h1>
      <Search fun={searchHandler} />
      <Board props={newSearch} />
    </>
  );
};

export default Home;
