import { saveValue } from 'feauters/saveSearchSlice';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

const Search = () => {
  const dispatch = useDispatch();
  const val = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    dispatch(saveValue(val.current?.value));
  };

  const enterKD = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch(saveValue(val.current?.value));
    }
  };

  return (
    <div className="search">
      <input
        inputMode="text"
        data-testid={'search'}
        className="searchInput"
        defaultValue={'nature'}
        ref={val}
        onKeyDown={enterKD}
      ></input>
      <button className="btnSearch" onClick={handleChange} data-testid={'sendSearch'}></button>
    </div>
  );
};

export default Search;
