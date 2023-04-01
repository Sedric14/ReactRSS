import React, { Component } from 'react';
import Board from 'components/card';
import Search from 'components/search';

class Home extends Component {
  render(): React.ReactNode {
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
  }
}

export default Home;
