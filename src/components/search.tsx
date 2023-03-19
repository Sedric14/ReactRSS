import React from 'react';
import { Component, ReactNode } from 'react';

class Search extends Component {
  render(): ReactNode {
    return <div className="search">
      <input inputMode='text' className = 'searchInput'></input>
      <button className='btnSearch'></button>
    </div>;
  }
}

export default Search;
