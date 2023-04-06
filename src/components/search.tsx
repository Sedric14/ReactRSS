import React, { useEffect, useLayoutEffect, useRef } from 'react';

interface PrTypes {
  fun: (str: string) => void;
}

const Search = (fun: PrTypes) => {
  const val = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (localStorage.getItem('search') && val?.current) {
      val.current.value = localStorage.getItem('search') as string;
    }
  });

  useLayoutEffect(() => {
    return () => {
      localStorage.setItem('search', val.current?.value as string);
    };
  });

  const handleChange = () => {
    localStorage.setItem('search', val.current?.value as string);
    if (val.current) val.current.value = localStorage.getItem('search') as string;
    fun.fun(localStorage.getItem('search') as string);
  };

  const enterKD = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      localStorage.setItem('search', val.current?.value as string);
      if (val.current) val.current.value = localStorage.getItem('search') as string;
      fun.fun(localStorage.getItem('search') as string);
    }
  };

  return (
    <div className="search">
      <input inputMode="text" className="searchInput" ref={val} onKeyDown={enterKD}></input>
      <button className="btnSearch" onClick={handleChange}></button>
    </div>
  );
};

export default Search;
