import { IRootState } from '../app/store';
import { saveValue } from '../feauters/saveSearchSlice';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Search = () => {
  const dispatch = useDispatch();
  const val = useRef<HTMLInputElement>(null);
  const old = useSelector((state: IRootState) => state.saveSearch);

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
        defaultValue={old.value}
        className="searchInput"
        ref={val}
        onKeyDown={enterKD}
      ></input>
      <button className="btnSearch" onClick={handleChange} data-testid={'sendSearch'}></button>
    </div>
  );
};

export default Search;
