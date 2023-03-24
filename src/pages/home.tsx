import React, { Component } from 'react';
import Board from 'components/card';
import Search from 'components/search';

class Home extends Component {
  render(): React.ReactNode {
    sessionStorage.setItem('page', 'Home');
    const headerText = document.querySelector('.headerText');
    if (headerText) headerText.innerHTML = `${sessionStorage.getItem('page')}`;
    return (
      <>
        <h1 className="title">Home page</h1>
        <Search />
        <Board />
      </>
    );
  }
}

export default Home;
