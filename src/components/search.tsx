import React, { useEffect, useLayoutEffect, useRef } from 'react';

const Search = () => {
  const val = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (localStorage.getItem('search') && val.current) {
      val.current.value = localStorage.getItem('search') as string;
    }
  });

  useLayoutEffect(() => {
    return () => {
      localStorage.setItem('search', val.current?.value as string);
    };
  });

  return (
    <div className="search">
      <input inputMode="text" className="searchInput" ref={val}></input>
      <button className="btnSearch"></button>
    </div>
  );
};

export default Search;
