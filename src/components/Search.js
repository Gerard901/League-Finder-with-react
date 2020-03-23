import React, { Component } from 'react';

export class Search extends Component {
  state = {
    text: 'SKT T1 FAKER',
    server: 'EUN1'
  };

  componentDidMount() {
    this.props.searchSummoner(this.state.text, this.state.server);
    this.setState({ text: 'SKT T1 FAKER' });
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onChangeServer = e => {
    this.setState({ [e.target.name]: e.target[e.target.selectedIndex].id });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.searchSummoner(this.state.text, this.state.server);
    this.setState({ text: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className='search card card-body container'>
            <h1>Search summoner</h1>
            <p className='lead'>Enter summoner name to fetch data</p>
            <div className='form-group'>
              <label htmlFor='servers'>Select server</label>
              <select
                className='form-control'
                id='servers'
                name='server'
                onChange={this.onChangeServer}
              >
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
              name='text'
              value={this.state.text}
              onChange={this.onChange}
            />
            <button className='btn btn-primary my-3' type='submit'>
              Search
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
