import React from 'react';
import Board from '../components/board';
import Search from '../components/search';

const Home: React.FC = () => {
  return (
    <>
      <header>{<h2 className="headerText">{'Home'}</h2>}</header>
      <h1 className="title">Home page</h1>
      <Search />
      <Board />
    </>
  );
};

export default Home;
