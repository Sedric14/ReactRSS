import React from 'react';
import { Component, ReactNode } from 'react';

class Search extends Component {
  val: HTMLInputElement | null | undefined;
  componentDidMount(): void {
    if (localStorage.getItem('search') && this.val) {
      this.val.value = localStorage.getItem('search') as string;
    }
  }
  componentWillUnmount(): void {
    localStorage.setItem('search', this.val?.value as string);
  }
  render(): ReactNode {
    return (
      <div className="search">
        <input inputMode="text" className="searchInput" ref={(input) => (this.val = input)}></input>
        <button className="btnSearch"></button>
      </div>
    );
  }
}

export default Search;
