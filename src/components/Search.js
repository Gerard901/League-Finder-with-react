import React from 'react';

const Search = () => {
  return (
    <div className='search card card-body container'>
      <h1>Search summoner</h1>
      <p className='lead'>Enter summoner name to fetch data</p>
      <div className='form-group'>
        <label htmlFor='servers'>Select server</label>
        <select className='form-control' id='servers'>
          <option id='EUN1'>EUNE</option>
          <option id='EUW1'>EUW</option>
          <option id='NA1'>NA</option>
          <option id='KR'>KR</option>
          <option id='OC1'>OCE</option>
        </select>
      </div>
      <input
        type='text'
        id='searchUser'
        className='form-control'
        placeholder='Summoner name'
      />
      <button className='btn btn-primary my-3' type='submit'>
        Search
      </button>
    </div>
  );
};

export default Search;
